const express = require('express');
const controller = require('../controllers/series');
const router = express.Router();

router.post('/',controller.createSerie);
router.get('/',controller.indexSerie); //series
router.get('/:key:value'); //series/director/Pepito 
router.put('/:key:value'); //series/genero/Comedia
router.delete('/:key:value'); //series/genero/Terror

module.exports = router;