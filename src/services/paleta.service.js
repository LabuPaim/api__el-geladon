const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao: 'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 10.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao: 'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao: 'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
];

const find__paletas__service__ALL = () => {
  return paletas;
};

const find__paletas__service__BY_ID = (id) => {
  return paletas.find((paleta) => paleta.id == id);
};

const create__paleta__SERVICE = (paleta__NEW) => {
  const new__ID = paletas.length + 1;
  paleta__NEW.id = new__ID;
  paletas.push(paleta__NEW);
  return paleta__NEW;
};

const update__paleta__SERVICE = (id, paleta__EDITED) => {
  paleta__EDITED['id'] = id;
  const paleta__INDEX = paletas.findIndex((paleta) => paleta.id == id);
  paletas[paleta__INDEX] = paleta__EDITED;
  return paleta__EDITED;
};

const delete__paleta__SERVICE = (id) => {
  const paleta__INDEX = paletas.findIndex((paleta) => paleta.id == id);
  return paletas.splice(paleta__INDEX, 1);
};

module.exports = {
  find__paletas__service__ALL,
  find__paletas__service__BY_ID,
  create__paleta__SERVICE,
  update__paleta__SERVICE,
  delete__paleta__SERVICE,
};
