const paletas__SERVICE = require('../services/paleta.service');

const find__paletas__controller__ALL = (req, res) => {
  const paletas__ALL = paletas__SERVICE.find__paletas__service__ALL();
  res.send(paletas__ALL);
};

const find__paletas__controller__BY_ID = (req, res) => {
  const param__ID = Number(req.params.id);
  const escolha__PALETA = paletas__SERVICE.find__paletas__service__BY_ID(param__ID);
  res.send(escolha__PALETA);
};

module.exports = {
  find__paletas__controller__ALL,
  find__paletas__controller__BY_ID,
};
