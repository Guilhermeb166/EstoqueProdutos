//Products.jsx
import {useEffect, useState} from 'react'
import api from '../api'
import ProductForm from '../components/ProductForm'
import ProductsTable from '../components/ProductsTable'

export default function Products() {
    const [products,setProducts] = useState([])
    const [editing,setEditing] = useState(null)

    const fetchProducts = async () => {
        const res = await api.get("/produtos")
        setProducts(res.data)
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
        <section>
            <h1>Produtos</h1>
            
            <ProductsTable products={products} onEdit={setEditing} onDelete={handleDelete} />
        </section>
    )
}
