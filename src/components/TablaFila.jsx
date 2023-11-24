import { useContext } from 'react'
import './TablaFila.scss'
import ProductoContext from '../contexts/ProductoContext'
import Swal from 'sweetalert2'

const TablaFila = ( { producto, setProductoAEditar } ) => {
  const { eliminarProductoContext } = useContext(ProductoContext)

  const handleDelete = (id) => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: `¿Estás seguro de eliminar el producto con el 'id': ${id}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar",
    cancelButtonText: "No, cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarProductoContext(id);
      Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.', 'success');
    } else {
      Swal.fire('Cancelado', 'El producto no ha sido eliminado.', 'error')
      return;
    }
  })}

  const handleUpdate = (producto) => {
    setProductoAEditar(producto)
  }

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img id="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <button className='btn btn-outline-dark' onClick={() => handleUpdate(producto)}>Editar</button>
        <button className="btn btn-danger" onClick={() => handleDelete(producto.id)}>Borrar</button>
      </td>
    </tr>
  )
}

export default TablaFila