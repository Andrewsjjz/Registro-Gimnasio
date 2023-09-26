import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Layout from './layout/Layout'
import AgregarCliente from './pages/AgregarCliente'
import ListaClientes from './components/ListaClientes'

function App() {


  return (
      <BrowserRouter>
      <Header/>
      <Routes>

        <Route path='/' element={<ListaClientes/>}/>
        <Route path='/agregar' element={<AgregarCliente/>} />

      </Routes>
      </BrowserRouter>
  )
}

export default App
