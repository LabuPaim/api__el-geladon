const route = require('express').Router();
const controller__PALETAS = require('../controllers/paleta.controller');

route.get('/todas-paletas', controller__PALETAS.find__paletas__controller__ALL);
route.get('/paleta/:id', controller__PALETAS.find__paletas__controller__BY_ID);

route.post('/create', controller__PALETAS.create__paleta__CONTROLLER);
route.put('/update/:id', controller__PALETAS.update__paleta__CONTROLLER);
route.delete('/delete/:id', controller__PALETAS.delete__paleta__CONTROLLER);

module.exports = route;
