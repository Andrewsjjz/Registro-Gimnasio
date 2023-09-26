import pool from "../database.js"


const agregarCliente = async (req, res) => {

    const {nombre, telefono, dni, precio, fechainicio, fechafinal, cuotas} = req.body

    try {
        const result = await pool.query
        ("INSERT INTO clientes (nombre, telefono, dni, precio, fechainicio, fechafinal) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [
            nombre, 
            telefono, 
            dni, 
            precio, 
            fechainicio, 
            fechafinal, 
        ])
        res.json(result.rows[0])

    } catch (error) {
        res.json({message: "Documento de identidad ya se encuentra registrado"})
        
    }

}

const listarCliente = async (req, res) => {
    
    try {
        const clientes = await pool.query('SELECT * FROM clientes')
        res.json(clientes.rows)     
    } catch (error) {
        console.log(error)
    }

}

const mostrarCliente = async (req, res) => {
    
    try {
        const {id} = req.params

        const resultado = await pool.query('SELECT * FROM clientes WHERE id = $1', [id])

        if(resultado.rows.length === 0 ) return res.status(404).json({message: "Cliente no encontrado"})     
        
        res.json(resultado.rows[0])
    } catch (error) {
        console.log(error.message)
    }

        
}

const eliminarCliente = async (req, res) => {

        const {id} = req.params

        const resultado = await pool.query('DELETE FROM clientes WHERE id = $1', [id])

        if(resultado.rowCount === 0 ) return res.status(404).json({message: "Cliente no encontrado"})    

        return res.json({message: "Cliente eliminado exitosamente"})

}

const actualizarCliente = async (req, res) => {

    const {nombre, telefono, dni, precio, fechainicio, fechafinal} = req.body
    const {id} = req.params
    try {
        const resultado= await pool.query
        ('UPDATE clientes SET nombre = $1, telefono = $2, dni = $3, precio=$4, fechainicio=$5, fechafinal = $6 WHERE id = $7 RETURNING *', 
        [nombre, telefono, dni, precio, fechainicio, fechafinal, id])
        
        if(resultado.rowCount === 0 ) return res.status(404).json({message: "Cliente no encontrado"})
       return res.json(resultado.rows[0])
    
    } catch (error) {
        console.error(error.message)
    }


}


export {
    agregarCliente,
    listarCliente,
    mostrarCliente,
    eliminarCliente,
    actualizarCliente
}