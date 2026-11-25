import { useCallback, useEffect, useState } from 'react'
import { API_URL } from './api'
import FormProduto from './components/FormProduto'
import ListaProdutos from './components/ListaProdutos'
import './App.css'

function App() {
  // Mantém os produtos carregados pela API.
  const [produtos, setProdutos] = useState([])
  const [erroCarregamento, setErroCarregamento] = useState(false)

  // Busca os produtos e atualiza o estado; registra falhas de carregamento.
  const carregarProdutos = useCallback(async () => {
    try {
      const resposta = await fetch(API_URL)
      if (!resposta.ok) {
        throw new Error('Falha ao carregar os produtos')
      }
      const dados = await resposta.json()
      setProdutos(dados)
      setErroCarregamento(false)
    } catch {
      setErroCarregamento(true)
    }
  }, [])

  // Carrega a lista uma única vez quando o App é montado.
  useEffect(() => {
    Promise.resolve().then(carregarProdutos)
  }, [carregarProdutos])

  return (
    <>
      <h1>Controle de Estoque</h1>
      <FormProduto onCadastrado={carregarProdutos} />
      {erroCarregamento ? (
        <p>Não foi possível carregar os produtos</p>
      ) : (
        <ListaProdutos produtos={produtos} />
      )}
    </>
  )
}

export default App
