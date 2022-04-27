const express = require('express');
const {
  postBuku,
  deleteBuku,
  getBuku,
  updateBuku,
} = require('../controllers/buku');

const routerBuku = express('router');

routerBuku.get('/buku', getBuku);
routerBuku.post('/buku', postBuku);
routerBuku.put('/buku/:id', updateBuku);
routerBuku.delete('/buku/:id', deleteBuku);

module.exports = routerBuku;
