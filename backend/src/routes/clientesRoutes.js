import express from "express"
import { Router } from "express"
import {
    agregarCliente,
    listarCliente,
    eliminarCliente,
    actualizarCliente,
    mostrarCliente
} from '../controllers/clientesControllers.js'



const router = express.Router()

router.post("/agregar", agregarCliente)//Agregar un cliente
router.get("/clientes", listarCliente) //Listar clientes
router.get("/clientes/:id", mostrarCliente) //Mostrar un cliente
router.delete("/:id", eliminarCliente) //Eliminar un cliente
router.put("/:id", actualizarCliente) // Actualizar un cliente

export default router;