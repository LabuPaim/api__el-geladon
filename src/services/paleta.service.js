const Paletas = require('../model/Paleta');

const find__paletas__service__ALL = async () => {
  const paletas = await Paletas.find();
  return paletas;
};

const find__paletas__service__BY_ID = async (id) => {
  const paletas = await Paletas.findById(id);
  return paletas;
};

const create__paleta__SERVICE = async (paleta__NEW) => {
  const paleta__CREATE = await Paletas.create(paleta__NEW);
  return paleta__CREATE;
};

const update__paleta__SERVICE = async (id, paleta__EDITED) => {
  const paleta__UPDATE = await Paletas.findByIdAndUpdate(id, paleta__EDITED);
  return paleta__UPDATE;
};

const delete__paleta__SERVICE = async (id) => {
  return await Paletas.findByIdAndDelete(id);
};

module.exports = {
  find__paletas__service__ALL,
  find__paletas__service__BY_ID,
  create__paleta__SERVICE,
  update__paleta__SERVICE,
  delete__paleta__SERVICE,
};
