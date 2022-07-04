const mongoose = require('mongoose');

const valid__ID = (req, res, next) => {
  const param__ID = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(param__ID)) {
    return res.status(400).send({ message: 'ID Inválido!' });
  }
  next();
};

const valid__OBJECT_BODY = (req, res, next) => {
  const paleta = req.body;
  if (!paleta || !paleta.sabor || !paleta.descricao || !paleta.foto || !paleta.preco) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados!',
    });
  }
  next();
};

module.exports = {
  valid__ID,
  valid__OBJECT_BODY,
};
