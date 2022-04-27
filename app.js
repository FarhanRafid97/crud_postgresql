const express = require('express');

const router = require('./restapi');
const bukuRouter = require('./route/BukuRouter');
const app = express();
const port = 8012;

app.use(express.json());

app.use(bukuRouter);
app.use(router);

app.listen(port, () => console.log(`app running in ${port}`));
