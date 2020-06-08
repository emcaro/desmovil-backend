const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//middlewares
app.use(cors());
app.use(bodyParser.json());


//Rutas
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
  res.send('Página Principal');
});



//Conexion con la base de datos
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log('Base de datos conectada...!!!'));

//Iniciando el servidor Http
app.listen('8080', () => {
  console.log('Servidor HTTP para "desmovil.backend" ejecutándose en http://localhost:8080')
});