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

const create__paleta__CONTROLLER = (req, res) => {
  const paleta = req.body;
  const paleta__NEW = paletas__SERVICE.create__paleta__SERVICE(paleta);
  res.send(paleta__NEW);
};

const update__paleta__CONTROLLER = (req, res) => {
  const param__ID = Number(req.params.id);
  const paleta__EDIT = req.body;
  const paleta__UPDATE = paletas__SERVICE.update__paleta__SERVICE(param__ID, paleta__EDIT);
  res.send(paleta__UPDATE);
};

const delete__paleta__CONTROLLER = (req, res) => {
  const param__ID = Number(req.params.id);
  paletas__SERVICE.delete__paleta__SERVICE(param__ID);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  find__paletas__controller__ALL,
  find__paletas__controller__BY_ID,
  create__paleta__CONTROLLER,
  update__paleta__CONTROLLER,
  delete__paleta__CONTROLLER,
};
