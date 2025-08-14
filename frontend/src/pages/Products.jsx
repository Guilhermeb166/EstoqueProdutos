//Products.jsx
import {useEffect, useState} from 'react'

import { useOutletContext } from 'react-router-dom'
import ProductForm from '../components/ProductForm'
import ProductsTable from '../components/ProductsTable'

export default function Products() {
    // Pegue as props do contexto do Outlet
    const { products, loading,  handleUpdate, handleDelete } = useOutletContext();

    if (loading) {
        return <p>Carregando produtos...</p>
    }
    
    return (
        
        <section style={{width: '100%', display:'flex',flexDirection:'column',alignItems:'center',gap:'20px'}}>
            {/*<h1>Produtos</h1>*/}
            <ProductsTable products={products} onUpdate={handleUpdate} onDelete={handleDelete} />
        </section>
    )
}
