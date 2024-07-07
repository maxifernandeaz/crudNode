const posteosModel = require("../models/posteosModel.js")

/*C R U D */
// Mostrar todos los registros - READ - GET


const traerPosteos = async (req, res) => {
    try {
        const posteos = await posteosModel.findAll() // metodo sequelize
        res.json(posteos)
    } catch (error) {
        res.json({ message: error.message })
    }
}


// MOSTRAR UN REGISTRO - READ - GET
const traerUnPosteo = async (req, res) => {
    try {
        const posteo = await posteosModel.findByPk(req.params.id)
        res.json(posteo)
    } catch (error) {
        res.json({ message:error.message })
    }
}

// CREAR UN REGISTROS - CREATE - POST

const crearPosteo = async (req,res) => {
    try {
        await posteosModel.create(req.body)
        res.json({ "message": "Registro creaco correctamente" })
    } catch (error) {
        res.json({ message:error.message })

    }
}

//  ACTUALIZAR UN REGISTRO - UPDATE - PUT

const actualizarPosteo = async (req,res) =>{
    try {
        await posteosModel.update(req.body,{
            where :{id:req.params.id}
        })
        res.json({ "message": "Registro actualizado correctamente" })
        
    } catch (error) {
        res.json({ message:error.message })
    }
}

const borrarPosteo = async (req,res)=>{
    try {
        await posteosModel.destroy({where :{id:req.params.id}})
        res.json({ "message": "Posteo borrado correctamente" })
    } catch (error) {
        res.json({ message:error.message })
    }
}


module.exports = { traerPosteos, traerUnPosteo, crearPosteo, actualizarPosteo,borrarPosteo }