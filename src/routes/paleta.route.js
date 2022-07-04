const route = require('express').Router();
const controller__PALETAS = require('../controllers/paleta.controller');
const { valid__ID, valid__OBJECT_BODY } = require('../middleware/peleta.middleware');

route.get('/todas-paletas', controller__PALETAS.find__paletas__controller__ALL);
route.get('/paleta/:id', valid__ID, controller__PALETAS.find__paletas__controller__BY_ID);
route.post('/create', valid__OBJECT_BODY, controller__PALETAS.create__paleta__CONTROLLER);
route.put('/update/:id', valid__ID, valid__OBJECT_BODY, controller__PALETAS.update__paleta__CONTROLLER);
route.delete('/delete/:id', valid__ID, controller__PALETAS.delete__paleta__CONTROLLER);

module.exports = route;
