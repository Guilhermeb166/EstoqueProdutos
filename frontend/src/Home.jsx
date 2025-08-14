//Home.jsx
import { NavLink, Outlet } from "react-router-dom"
import Inventory from "./components/Inventory";
import {useEffect, useState} from 'react'
import styles from './components/css/Home.module.css'
import api from './api'
import Products from "./pages/Products";
import ProductForm from "./components/ProductForm";

export default function Home() {
  const [products,setProducts] = useState([])
    const [editing,setEditing] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchProducts = async () => {
        const res = await api.get("/produtos")
        setProducts(res.data)
        setLoading(false)
    }

    useEffect(()=>{fetchProducts()}, [])

    const handleCreate = async (data) => {
        await api.post("/produtos", data)
        fetchProducts()
    }

    const handleUpdate = async (id, data) => {
        await api.put(`/produtos/${id}`, data)
        setEditing(null)
        fetchProducts()
    }

    const handleDelete = async (id) =>{
        await api.delete(`/produtos/${id}`)
        fetchProducts()
    }
  return (
    <main className={styles.home}>
        
        <h1>Estoque de Produtos</h1>
        <nav className={styles.links}>
            <NavLink to="/productForm" className={({isActive})=> isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>Formulário</NavLink>
            <NavLink to="/inventory" className={({isActive})=> isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>Inventário</NavLink>
            <NavLink to="/products" className={({isActive})=> isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>Produtos</NavLink>
        </nav>
        <div className={styles.content}>
          <Outlet context={{ products, editing, setEditing, loading, handleCreate, handleUpdate, handleDelete }} />
        </div>
        
    </main>
  )
}
/*
? O <Outlet /> no React Router é um "ponto de injeção" onde o conteúdo das rotas filhas será renderizado.
? Você precisa transformar Products, ProductForm e Inventory em rotas filhas de Home:
<Routes>
  <Route path="/" element={<Home />}>
    <Route path="products" element={<Products />} />
    <Route path="productForm" element={<ProductForm />} />
    <Route path="inventory" element={<Inventory />} />
  </Route>
</Routes>


A diferença principal entre Link e NavLink no React Router é que:

? Link:
*-Serve apenas para navegar entre rotas.
*-Não tem noção de qual rota está ativa.

?NavLink:
*-Também navega entre rotas mas tem a capacidade de saber se a rota está ativa.
*-Permite mudar estilo ou classes automaticamente para o link ativo.


*/
