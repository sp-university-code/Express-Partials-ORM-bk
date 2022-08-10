const express = require('express')
const router = express.Router()

const Sequelize = require('sequelize')
const Producto = require('../models').producto



router.get('/productos', function(req, res, next) {
    Producto.findAll({  
         attributes: { exclude: ["updatedAt"] }  
     }) 
     .then(resultado => {  
        res.json(resultado)
    })
     .catch(error => res.status(400).send(error)) 
 });

    
module.exports = router;