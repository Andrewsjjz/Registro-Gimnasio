import {useState} from 'react'

export default function AgregarCliente() {



  return (
<div class="h-screen flex justify-center items-center">
	<div class="lg:w-2/5 md:w-1/2 w-2/3">
		<form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
			<h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Formulario de Registro</h1>
			<div>
				<label class="text-gray-800 font-semibold block my-3 text-md" for="username">Nombre y Apellido</label>
				<input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" 
        type="text" name="nombre" id="nombre" placeholder="Nombre y Apellido" />
      </div>
				<div>
					<label class="text-gray-800 font-semibold block my-3 text-md" for="email">Documento de identidad</label>
					<input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" 
          type="text" name="DNI" id="DNI" placeholder="Documento de identidad" />
      </div>
					<div>
						<label class="text-gray-800 font-semibold block my-3 text-md" for="password">Telefono</label>
						<input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" 
            type="text" name="telefono" placeholder="telefono" />
      </div>
						<div>
							<label class="text-gray-800 font-semibold block my-3 text-md" for="confirm">Fecha de Pago</label>
							<input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" 
              type="date" name="fechapago" id="fechapago"/>
      </div>
      <div>
							<label class="text-gray-800 font-semibold block my-3 text-md" for="confirm">Fecha de Corte</label>
							<input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" 
              type="date" name="fechacorte" id="fechacorte"/>
      </div>


      <div>
            <label class="text-gray-800 font-semibold block my-3 text-md">Membresia:</label>
            <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none cursor-pointer">
                <option className="text-sm text-black">Semanal</option>
                <option className="text-sm text-black">Mensual</option>
            </select>
        </div>

							<button type="submit" class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>
							<button type="submit" class="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">Login</button>
		</form>
	</div>
</div>
  )
}
