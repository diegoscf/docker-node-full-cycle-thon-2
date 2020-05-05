'use strict';

const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';
const app = express();

app.get('/', (req, res) => {
  res.send('Maratona Full Cycle 2.0');
}).listen(PORT, HOST);

console.log(`Servidor rodando em http://${HOST}:${PORT}`);