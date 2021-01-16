import React from 'react'

const AdminPedidosScreen = () => {
  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col">
          <h1 className="display-4 text-center">
            Lista de Pedidos
          </h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              Aquí irá nuestro dataTable
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AdminPedidosScreen
