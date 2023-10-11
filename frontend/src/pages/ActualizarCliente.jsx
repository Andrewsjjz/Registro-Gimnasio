import React from 'react'
import { Link } from 'react-router-dom'
import ActualizarCliente from '../components/FormularioActualizar'

const FormularioActualizar = () => {
  return (
    <>
      <Link to='/'>
      Atras
      </Link>

      <div class="h-screen flex justify-center items-center">
			<div class="lg:w-2/5 md:w-1/2 w-2/3">
                <ActualizarCliente/>
			</div>
		</div>
    </>
  )
}

export default FormularioActualizar
