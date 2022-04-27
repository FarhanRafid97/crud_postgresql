const express = require('express');
const { postBuku, getBuku, updateBuku } = require('../controllers/buku');

const routerBuku = express('router');

routerBuku.get('/buku', getBuku);
routerBuku.post('/buku', postBuku);
routerBuku.put('/buku/:id', updateBuku);

module.exports = routerBuku;
