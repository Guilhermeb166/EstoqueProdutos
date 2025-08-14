//ProductsTable.jsx
import styles from './css/ProductsTable.module.css'
import { useState } from 'react';

export default function ProductsTable({products, onUpdate, onDelete}){

    const [editId, setEditId] = useState(null); // editId: guarda o id do produto que está em modo de edição (ou null se nenhum).
    const [editForm, setEditForm] = useState({ nome: "", descricao: "",preco: 0, quantidade: 0 });
    //editForm: guarda os valores editáveis da linha atual. Isso vira os value dos inputs .

    const startEdit = (p)=>{
        setEditId(p.id)// Define qual linha vai virar inputs.
        setEditForm({nome: p.nome, descricao: p.descricao ,preco: p.preco, quantidade: p.quantidade})// Pré-carrega o formulário com os dados da linha clicada.
    }

    const saveEdit = () => {
        // Converte strings para números (se não conseguir, usa 0)
        const preco = parseFloat(editForm.preco) || 0
        const quantidade = parseInt(editForm.quantidade) || 0

        // O ...editForm copia tudo isso para dentro do novo objeto.
        //Em seguida, preco e quantidade no final sobrescrevem os valores originais que eram strings, substituindo-os pelas versões numéricas
        onUpdate(editId, {
            ...editForm,
            preco,
            quantidade
        });
        setEditId(null)// sai do modo de edição
    };

    const cancelEdit = () => {
        setEditId(null)// simplesmente sai do modo de edição sem alterar nada
    };

    return (
        <table border="1" cellSpacing="8" className={styles.table}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {products && products.length > 0 ? (
                        products.map((p) => (
                            <tr key={p.id}>
                                <td>
                                    {editId === p.id ? (
                                        <input
                                        value={editForm.nome}
                                        onChange={(e) => setEditForm({...editForm, nome: e.target.value})}
                                        />
                                    ) : (
                                        p.nome
                                    )}
                                </td>
                                <td>
                                    {editId === p.id?(
                                        <input
                                        value={editForm.descricao}
                                        onChange={(e)=> setEditForm({...editForm, descricao: e.target.value})}
                                        />
                                    ) : (
                                        p.descricao
                                    )}
                                </td>
                                <td>
                                    {editId === p.id?(
                                        <input
                                        value={editForm.preco}
                                        onChange={(e)=> setEditForm({...editForm, preco: e.target.value})}
                                        />
                                    ) : (
                                        <p>R$ { p.preco.toFixed(2)}</p>
                                    )}
                                </td>
                                <td>
                                    {editId === p.id?(
                                        <input
                                        value={editForm.quantidade}
                                        onChange={(e)=> setEditForm({...editForm, quantidade: e.target.value})}
                                        />
                                    ) : (
                                        p.quantidade
                                    )}
                                </td>
                                <td>
                                     <div className={styles.buttonsTable}>
                                         {editId === p.id ? (
                                            <>
                                                <button onClick={saveEdit}  className={styles.buttonTable}>Salvar</button>
                                                <button onClick={cancelEdit}  className={styles.buttonTable}>Cancelar</button>
                                            </>
                                            ) : (
                                            <>
                                                <button onClick={() => startEdit(p)}  className={styles.buttonTable}>Editar</button>
                                                <button onClick={() => onDelete(p.id)}  className={styles.buttonTable}>Excluir</button>
                                            </>
                                            )}
                                     </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Nenhum produto encontrado.</td>
                        </tr>
                    )}
            </tbody>
        </table>
    )
}
//...editForm → copia todas as outras propriedades do estado atual (nome, quantidade, etc.).
