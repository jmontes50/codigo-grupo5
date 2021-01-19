import React, { useEffect, useState } from 'react'
import { getPedidoById } from '../../../../services/pedidoService';

const AdminVerPedidoScreen = (props) => {

  const [pedido, setPedido] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getPedidoById(props.match.params.pedido_id).then(data => {
      if (data.ok) {
        setPedido(data.pedido);
      }
    })
  }, []);

  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col">
          <h4>Información del Pedido</h4>
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <p className="card-text">
                    <strong>Pedido Id:</strong> &nbsp; {pedido.pedido_id}
                  </p>
                  <p className="card-text">
                    <strong>Usuario:</strong> &nbsp; {pedido.Usuario?.usu_nom + " " + pedido.Usuario?.usu_ape}
                  </p>
                  <p className="card-text">
                    <strong>Estado del Pedido:</strong> &nbsp;
                    {
                      pedido.pedido_est === "pagado" ?
                        <span className="badge badge-success">Pagado</span> :
                        <span className="badge badge-secondary">{pedido.pedido_est}</span>
                    }
                  </p>
                </div>
                <div className="col-md-6 text-right">
                  <p className="card-text">
                    <strong>Fecha:</strong> &nbsp; {pedido.pedido_fech}
                  </p>
                  <p className="card-text">
                    <strong>Número de mesa:</strong> &nbsp; {pedido.Mesa?.mesa_nro}
                  </p>
                  <p className="card-text">
                    <strong>Número de pedido:</strong> &nbsp;
                    <span className="display-4"> # {pedido.pedido_nro}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Cantidad</th>
                      <th>Descripción</th>
                      <th>Foto</th>
                      <th>P. Unitario</th>
                      <th>P. Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      pedido.PedidoPlatos.map((objPedidoPlato) => {
                        return <tr key={objPedidoPlato.pedidoplato_id}>

                        </tr>
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AdminVerPedidoScreen
