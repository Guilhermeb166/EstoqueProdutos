//ProductForm.jsx
import {useEffect,useState} from 'react'
import styles from './css/ProductForm.module.css'
export default function ProductForm({onSubmit, product, onUpdate}){
    
    const [form, setForm] = useState({nome:"", descricao:"", preco:0, quantidade:0})

    useEffect(()=>{
        if(product) setForm(product)
    }, [product])

    const submit = (e) => {
        e.preventDefault()
        if(product && onUpdate) onUpdate(product.id, form)
        else onSubmit(form)
        setForm({nome:"", descricao:"", preco:0, quantidade:0})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <input type="text"  placeholder="Nome" value={form.nome} onChange={e=>setForm({...form, nome:e.target.value})} required/>
            <input type="text" placeholder="Descrição" value={form.descricao} onChange={e=>setForm({...form, descricao:e.target.value})}/>
            <input type="number" step="0.01" placeholder="Preço" value={form.preco} onChange={e=>setForm({...form, preco:e.target.value})}/>
            <input type="number" placeholder="Quantidade" value={form.quantidade} onChange={e=>setForm({...form, quantidade:e.target.value})}/>
            <button type='submit' >{product ? "Atualizar" :"Adicionar"}</button>
        </form>
    )
}
