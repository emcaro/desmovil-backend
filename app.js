const express = require('express');

const app = express();


//Rutas
app.get('/', (req, res) => {
  res.send('Página Principal');
});

app.get('/posts', (req, res) => {
  res.send('Página de posts');
});

//Iniciando el servidor Http
app.listen('3000', () => {
  console.log('Servidor HTTP para "desmovil.backend" ejecutándose en http://localhost:3000')
});