const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5322,
  database: 'db_user',
});

module.exports = client;
