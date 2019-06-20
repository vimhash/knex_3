;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])

let getDatos = (req, res) => {
    let tabla = req.query.tabla
    let campo = req.query.campo
    db.select(campo).from(tabla)
    .then( resultado => res.send(resultado) )
}

let postDatos = (req, res) => {
    let tabla = req.body.tabla
    let retorno = req.body.retorno
    let datos = req.body.datos
    db(tabla).returning(retorno).insert(datos)
    .then(() => {
        db.select().from('person').then( resultado => res.send(resultado));
    })
}

module.exports = {
    getDatos,
    postDatos
}