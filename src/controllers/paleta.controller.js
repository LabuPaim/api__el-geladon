const paletas__SERVICE = require('../services/paleta.service');
const mongoose = require('mongoose');

const find__paletas__controller__ALL = async (req, res) => {
  const paletas__ALL = await paletas__SERVICE.find__paletas__service__ALL();

  if (paletas__ALL.length === 0) {
    return res.status(404).send({ message: 'Não existe nenhuma paleta cadastrada' });
  }

  res.send(paletas__ALL);
};

const find__paletas__controller__BY_ID = async (req, res) => {
  const param__ID = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(param__ID)) {
    return res.status(400).send({ message: 'ID Inválido!' });
  }

  const escolha__PALETA = await paletas__SERVICE.find__paletas__service__BY_ID(param__ID);
  if (!escolha__PALETA) {
    return res.status(404).send({ message: 'Paleta não encontrada' });
  }
  res.send(escolha__PALETA);
};

const create__paleta__CONTROLLER = async (req, res) => {
  const paleta = req.body;
  if (!paleta || !paleta.sabor || !paleta.descricao || !paleta.foto || !paleta.preco) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!',
    });
  }
  const paleta__NEW = await paletas__SERVICE.create__paleta__SERVICE(paleta);
  res.status(201).send(paleta__NEW);
};

const update__paleta__CONTROLLER = async (req, res) => {
  const param__ID = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(param__ID)) {
    return res.status(400).send({ message: 'Paleta não encontrada' });
  }
  const paleta__EDIT = req.body;
  if (
    !paleta__EDIT ||
    !paleta__EDIT.sabor ||
    !paleta__EDIT.descricao ||
    !paleta__EDIT.foto ||
    !paleta__EDIT.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Você não preencheu todos os dados para editar a paleta!' });
  }
  const paleta__UPDATE = await paletas__SERVICE.update__paleta__SERVICE(param__ID, paleta__EDIT);
  res.send(paleta__UPDATE);
};

const delete__paleta__CONTROLLER = async (req, res) => {
  const param__ID = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(param__ID)) {
    return res.status(400).send({ message: 'Paleta não encontrada' });
  }
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
