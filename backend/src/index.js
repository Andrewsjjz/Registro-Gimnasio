import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from 'morgan';
import clientesRoutes from './routes/clientesRoutes.js'


const app = express()
app.use(cors())
app.use(express.json());
app.use(morgan('dev'))
dotenv.config();

//Routing 
app.use(clientesRoutes)

const whitelist = [process.env.FRONTEND_URL];
app.use(cors({
    origin: whitelist
  }))


const PORT = process.env.PORT || 4000
const servidor = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
