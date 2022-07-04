const paletas__SERVICE = require('../services/paleta.service');
const mongoose = require('mongoose');

const find__paletas__controller__ALL = async (req, res) => {
  const paletas__TODAS = await paletas__SERVICE.find__paletas__service__ALL();
  if (paletas__TODAS.length === 0) {
    return res.status(404).send({ message: 'Não existe nenhuma paleta cadastrada' });
  }
  res.send(paletas__TODAS);
};

const find__paletas__controller__BY_ID = async (req, res) => {
  const param__ID = req.params.id;
  const escolha__PALETA = await paletas__SERVICE.find__paletas__service__BY_ID(param__ID);
  if (!escolha__PALETA) {
    return res.status(404).send({ message: 'Paleta não encontrada' });
  }
  res.send(escolha__PALETA);
};

const create__paleta__CONTROLLER = async (req, res) => {
  const paleta = req.body;
  const paleta__NOVA = await paletas__SERVICE.create__paleta__SERVICE(paleta);
  res.status(201).send(paleta__NOVA);
};

const update__paleta__CONTROLLER = async (req, res) => {
  const param__ID = req.params.id;
  const paleta__EDITADA = req.body;
  const paleta__UPDATE = await paletas__SERVICE.update__paleta__SERVICE(param__ID, paleta__EDITADA);
  res.send(paleta__UPDATE);
};

const delete__paleta__CONTROLLER = async (req, res) => {
  const param__ID = req.params.id;
  await paletas__SERVICE.delete__paleta__SERVICE(param__ID);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  find__paletas__controller__ALL,
  find__paletas__controller__BY_ID,
  create__paleta__CONTROLLER,
  update__paleta__CONTROLLER,
  delete__paleta__CONTROLLER,
};
