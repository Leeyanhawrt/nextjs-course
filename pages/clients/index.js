import Link from 'next/link'

function ClientsPage() {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'manu', name: 'Manuel' },
  ]

  const renderedClients = clients.map((client) => {
    return (
      <li key={client.id}>
        <Link href={{
          pathname: '/clients/[id]',
          query: { id: client.id },
        }}>{client.name}</Link>
      </li>
    )
  })

  console.log(renderedClients)


  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {renderedClients}
      </ul>
    </div>
  )
}

export default ClientsPage;