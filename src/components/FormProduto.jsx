import { useState } from 'react'
import { API_URL } from '../api'

function FormProduto({ onCadastrado }) {
  const [nome, setNome] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [localizacao, setLocalizacao] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    const quantidadeNumerica = Number(quantidade)
    if (
      !nome.trim() ||
      !localizacao.trim() ||
      quantidade.trim() === '' ||
      !Number.isFinite(quantidadeNumerica) ||
      quantidadeNumerica < 0
    ) {
      setErro('Preencha todos os campos e informe uma quantidade maior ou igual a 0')
      return
    }

    try {
      // Envia os dados validados para criar um produto na API.
      const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome.trim(),
          localizacao: localizacao.trim(),
          quantidade: quantidadeNumerica,
        }),
      })

      if (!resposta.ok) {
        throw new Error('Falha ao cadastrar o produto')
      }

      setNome('')
      setQuantidade('')
      setLocalizacao('')
      setErro('')
      onCadastrado()
    } catch {
      setErro('Não foi possível cadastrar o produto')
    }
  }

  return (
    <form className="form-produto" onSubmit={handleSubmit}>
      <label>
        Nome
        <input
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </label>
      <label>
        Quantidade
        <input
          type="number"
          min="0"
          value={quantidade}
          onChange={(event) => setQuantidade(event.target.value)}
        />
      </label>
      <label>
        Localização
        <input
          type="text"
          value={localizacao}
          onChange={(event) => setLocalizacao(event.target.value)}
        />
      </label>
      <button type="submit">Cadastrar produto</button>
      {erro && <p className="form-erro">{erro}</p>}
    </form>
  )
}

export default FormProduto
