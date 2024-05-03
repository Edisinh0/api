const express = require('express')
const routes = express.Router()



// AGREGAR
routes.get('/', (req,res) =>
{req.getConnection((err, conn) =>{ 
    if(err) return res.send(err)

    conn.query(`SELECT * FROM ramos`, (err, rows)=>{
        if(err) return res.send(err)

        res.json(rows)

    })

})})


// CONSULTAR
routes.post('/', (req,res) =>
{req.getConnection((err, conn) =>{ 
    if(err) return res.send(err)

    conn.query(`INSERT INTO ramos set ?`,[req.body]  , (err, rows)=>{
        if(err) return res.send(err)

        res.send('ramo insertado')

    })

})})

// ELIMINAR

routes.delete('/:id', (req,res) =>
{req.getConnection((err, conn) =>{ 
    if(err) return res.send(err)

    conn.query(`DELETE FROM ramos WHERE id = ?`,[req.params.id]  , (err, rows)=>{
        if(err) return res.send(err)

        res.send('ramo eliminado')

    })

})})

// EDITAR

routes.put('/:id', (req,res) =>
{req.getConnection((err, conn) =>{ 
    if(err) return res.send(err)

    conn.query(`UPDATE ramos set ? WHERE id = ?`,[req.body, req.params.id]  , (err, rows)=>{
        if(err) return res.send(err)

        res.send('ramo actualizado')

    })

})})



module.exports = routes

