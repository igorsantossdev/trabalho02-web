import { useEffect, useState } from 'react'
import { API_URL } from '../api'

function ListaProdutos() {
  // Guarda a lista atual de produtos
  const [produtos, setProdutos] = useState([])
  const [erro, setErro] = useState(false)

  // Busca os produtos uma única vez quando o componente monta
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falha na requisição')
        }
        return response.json()
      })
      .then((dados) => setProdutos(dados))
      .catch(() => setErro(true))
  }, [])

  if (erro) {
    return <p>Não foi possível carregar os produtos</p>
  }

  if (produtos.length === 0) {
    return <p>Nenhum produto cadastrado</p>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Quantidade</th>
          <th>Localização</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto) => (
          <tr key={produto.id}>
            <td>{produto.nome}</td>
            <td>{produto.quantidade}</td>
            <td>{produto.localizacao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ListaProdutos
