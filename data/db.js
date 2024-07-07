const {Sequelize} = require ("sequelize")

// nombre de la base de datos - user - contrasena - {donde esta alojada la bd?, lenguaje, puert}
const db = new Sequelize ("trancastyle", "root", "",{
    host: "localhost",
    dialect:"mysql",
    port:3306
})
module.exports = db