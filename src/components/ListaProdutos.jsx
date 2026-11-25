function ListaProdutos({ produtos }) {
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
