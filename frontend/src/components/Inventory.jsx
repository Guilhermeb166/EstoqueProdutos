//Inventory.jsx
import { useState, useEffect } from "react"
import { getInventory } from "../api.js";
import styles from './css/Inventory.module.css'

export default function Inventory() {
  const [data,setData] = useState([])
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    getInventory()
      .then((res) => {
        setData(res.data);
        setLastUpdate(new Date().toLocaleString("pt-BR"));
      })
      .catch((err) => console.error("Erro ao carregar inventário", err));
  }, []);

  if(!data){
    return <p>Carregando Inventário...</p>
  }

  return (
    <section className={styles.Inventory}>
      <h2 className={styles.Title}>📦 Inventário</h2>
      <div className={styles.infoInventory}>
        <span>Total de Produtos:</span>
        <strong>{data.total_produtos}</strong>
      </div>
      <div className={styles.infoInventory}>
        <span>Estoque Total:</span>
        <strong>{data.quantidade_total}</strong>
      </div>
      <div className={styles.infoInventory}>
        <span>Valor Total:</span>
        <strong>R$ {data?.valor_total?.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) || "0,00"}</strong>
      </div>
      <div className={styles.lastProducts}>
        {data.ultimo_adicionado && (
          <div>Último produto adicionado: <strong>{data.ultimo_adicionado}</strong></div>
        )}
        {data.ultimo_excluido && (
          <div>Último produto excluído: <strong>{data.ultimo_excluido}</strong></div>
        )}
      </div>
      <small style={{ color: "#999" }}>
        Última atualização: {lastUpdate}
      </small>
    </section>
  )
}
