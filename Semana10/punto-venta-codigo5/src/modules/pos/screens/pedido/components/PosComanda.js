import React, { useContext } from 'react'
import PosContext from '../../../../../context/pos/posContext'
import PosComandaItem from './PosComandaItem'

const PosComanda = () => {

  const { pedidos, mesa_global } = useContext(PosContext);

  let pedidoActual = null;

  if (mesa_global) {
    pedidoActual = pedidos.find(objPedido => objPedido.objMesa.mesa_id === mesa_global.mesa_id);
  }


  return (
    <div className="comanda">
      <h4 className="comanda__mesa">{mesa_global ? `Mesa ${mesa_global.mesa_nro}` : "Sin mesa seleccionada"}</h4>
      <p className="comanda__usuario">Carlos Jimenez</p>
      <hr />

      {
        !mesa_global ?
          (<div>Seleccione una mesa</div>) :
          pedidoActual ?
            (<>
              <ul className="comanda__lista">

                {
                  pedidoActual.platos.map(objPlato => {
                    return (<PosComandaItem objPlato={objPlato} />)
                  })
                }

              </ul>
              <button className="boton boton-success boton-block">PAGAR</button>
            </>) :
            <div>
              No hay pedidos en la mesa {mesa_global.mesa_nro} 😥
            </div>

      }

    </div>
  )
}

export default PosComanda
