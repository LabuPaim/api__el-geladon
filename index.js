const express = require('express');
const cors = require('cors');
const route = require('./src/routes/paleta.route');
const connect__DB = require('./src/database/mongo.connection');

const port = 3000;
const app = express();

connect__DB();

app.use(express.json());
app.use(cors());
app.use('/paletas', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
