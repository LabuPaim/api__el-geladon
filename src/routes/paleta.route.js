const route = require('express').Router();
const controller__PALETAS = require('../controllers/paleta.controller');

route.get('/todas-paletas', controller__PALETAS.find__paletas__controller__ALL);
route.get('/paleta/:id', controller__PALETAS.find__paletas__controller__BY_ID);

module.exports = route;
