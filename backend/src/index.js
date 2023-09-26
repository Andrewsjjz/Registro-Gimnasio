import dotenv from "dotenv";
import express from "express";
import cors from 'cors'
import clienteRoutes from "./routes/clienteRoutes.js";


const app = express()
app.use(express.json());

dotenv.config();
app.use(cors())
app.use(clienteRoutes)
app.use(express.json())

const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      // No esta permitido
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions));


const PORT = process.env.PORT || 4000
const servidor = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
