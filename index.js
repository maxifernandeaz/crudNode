const express = require("express")
const app = express()
const port = 3030
const cors = require ("cors")
const posteosRouter = require ("./router/posteosRouter.js")
const db = require ("./data/db.js")

app.use(cors())
app.use(express.json()) // analizamos en formato req.body


///*pedido HTTP/RUTA - FUNCION = CONTROLER */
app.get("/", (req, res) => {
    res.send("aca estamos en los posteos")
}) //SIN MODULARIZAR

app.use("/posteos",posteosRouter)

// conexion a la base de datos
const conexionDB = async ()=>{
    try {
        await db.authenticate()
        console.log('conectado ok a  la base de datos');
    }   catch (error) {
        console.log(`el error es : ${error}`);
    }
}




app.listen(port, () => {
    conexionDB()
    console.log(`el servidor esta ok peurta${port}`);
})