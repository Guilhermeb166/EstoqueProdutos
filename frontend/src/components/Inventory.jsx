//Inventory.jsx
import { useState, useEffect } from "react"
import { getInventory } from "../api.js";
import styles from './css/Inventory.module.css'

export default function Inventory() {
  const [data,setData] = useState([])

  useEffect(()=>{
    getInventory()
    .then((res)=> setData(res.data))
    .then((err)=> console.error("Erro ao carregar inventário", err))

    
  }, [])

  if(!data){
    return <p>Carregando Inventário...</p>
  }

  return (
    <section className={styles.Inventory}>
      <h2>📦 Inventário</h2>
      <div>
        <span>Total de Produtos</span>
        <strong>{data.total_produtos}</strong>
      </div>
      <div>
        <span>Quantidade Total</span>
        <strong>{data.quantidade_total}</strong>
      </div>
      <div>
        <span>Valor Total</span>
        <strong>R$ {data?.valor_total?.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) || "0,00"}</strong>
      </div>
    </section>
  )
}
