import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ListaClientes() {

  const [clientes, setClientes] = useState([
    {
    Name: "andres Jimenez", 
    FechaInicio: "2023-10-10",
    FechaCorte: "2023-10-17",
    Telefono: 4121635088,
    Membresia: "semanal",
  },
  {
    Name: "andres Jimenez", 
    FechaInicio: "2023-10-10",
    FechaCorte: "2023-10-17",
    Telefono: 4121635088,
    Membresia: "semanal",
  },
  {
    Name: "andres Jimenez", 
    FechaInicio: "2023-10-10",
    FechaCorte: "2023-10-17",
    Telefono: 4121635088,
    Membresia: "semanal",
  },
  {
    Name: "andres Jimenez", 
    FechaInicio: "2023-10-10",
    FechaCorte: "2023-10-17",
    Telefono: 4121635088,
    Membresia: "semanal",
  },
  {
    Name: "andres Jimenez", 
    FechaInicio: "2023-10-10",
    FechaCorte: "2023-10-17",
    Telefono: 4121635088,
    Membresia: "semanal",
  },
  {
    Name: "andres Jimenez", 
    FechaInicio: "2023-10-10",
    FechaCorte: "2023-10-17",
    Telefono: 4121635088,
    Membresia: "semanal",
  }
])

  return (
    <>
<div class="flex items-center justify-between p-5">
  <div class="w-2/5 rounded-lg p-5 max-sm:w-2/4">
    <div class="flex">
      <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
        <svg viewBox="0 0 20 20" aria-hidden="true" class="pointer-events-none absolute w-5 fill-gray-500 transition">
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
      <input type="text"  class="w-full bg-white pl-2 text-base font-semibold outline-0" placeholder="" id="" />
      <input type="button" value="Buscar" class="bg-orange-600 cursor-pointer p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-orange-800 transition-colors"/>
    </div>
  </div>

        <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-black bg-white cursor-pointer rounded">
            <p>Mostrar:</p>
            <select className="focus:outline-none bg-transparent ml-1 cursor-pointer">
                <option className="text-sm text-black">Semanal</option>
                <option className="text-sm text-black">Mensual</option>
            </select>
        </div>

</div>

    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Nombre</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Fecha de Inicio</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Fecha de Corte</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Telefono</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Membresia</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">

    {clientes.map((cliente) => {
      return <tr>

        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div class="text-sm">
            <div class="font-medium text-gray-700">{cliente.Name}</div>
          </div>
        </th>

        <td class="px-6 py-4">
          <span
            class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
            {cliente.FechaInicio}
          </span>
        </td>

        <td class="px-6 py-4">
          <span
            class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-red-600"></span>
            {cliente.FechaCorte}
          </span>
        </td>

        <td class="px-6 py-4 text-black">{cliente.Telefono}</td>

        <td class="px-6 py-4">
          <div class="flex gap-2">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
            >
              {cliente.Membresia}
            </span>
          </div>
        </td>

        <td class="px-6 py-4">
          <div class="flex justify-end gap-4">

            {/* Eliminar */}
            <Link x-data="{ tooltip: 'Delete' }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </Link>

            {/* Actualizar */}
            <Link x-data="{ tooltip: 'Edite' }" to='/actualizar'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </Link>
          </div>
        </td>

      </tr>

    })}

    </tbody>
  </table>
</div>
    </>

  )
}
