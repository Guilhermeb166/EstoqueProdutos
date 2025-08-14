//ProductsTable.jsx
import styles from './css/ProductsTable.module.css'

export default function ProductsTable({products, onEdit, onDelete}){
  return (
    <table border="1" cellSpacing="8">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {products && products.length > 0 ? (
                    products.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco.toFixed(2)}</td>
                            <td>{p.quantidade}</td>
                            <td>
                                <button onClick={() => onEdit(p)}>Editar</button>
                                <button onClick={() => onDelete(p.id)}>Excluir</button>
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
