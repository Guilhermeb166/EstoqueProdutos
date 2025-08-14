//ProductForm.jsx
import {useEffect,useState} from 'react'
import styles from './css/ProductForm.module.css'
import { useOutletContext } from 'react-router-dom'

export default function ProductForm({onSubmit, product, onUpdate}){
    const { editing, setEditing, handleUpdate, handleCreate } = useOutletContext() 
    const [form, setForm] = useState({nome:"", descricao:"", preco:null, quantidade:null})

    useEffect(()=>{
        if(editing) setForm(editing)
    }, [editing])

    const submit = (e) => {
        e.preventDefault()
        if(editing && handleUpdate) handleUpdate(editing.id, form)
        else handleCreate(form)
        setForm({nome:"", descricao:"", preco:0, quantidade:0})
        setEditing(null) // Adicionado para resetar o formulário após a submissão
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <input type="text"  placeholder="Nome" value={form.nome} onChange={e=>setForm({...form, nome:e.target.value})} required/>
            <input type="text" placeholder="Descrição" value={form.descricao} onChange={e=>setForm({...form, descricao:e.target.value})} maxLength={30}/>
            <input type="number" step="0.01" placeholder="Preço" value={form.preco} onChange={e=>setForm({...form, preco:e.target.value})}/>
            <input type="number" placeholder="Quantidade" value={form.quantidade} onChange={e=>setForm({...form, quantidade:e.target.value.replace(/\D/g, "")})} min="0" step="1"/>
            <button type='submit' >{editing ? "Atualizar" :"Adicionar"}</button>
        </form>
    )
}
