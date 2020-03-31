const express = require("express");
const cors = require('cors');
const routes = require("./routes");

const app = express();
// app.use(cors({origin: 'http://meuapp.com'}));
app.use(cors());
const {errors} = require('celebrate');
app.use(express.json());

/**
 * Tipos de Parâmetro
 * Query Params: parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 *               Acesso: const query  = req.query
 * Route params: parametros para identificar recursos (users/:id))
 *               Acesso: const params = req.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').selec(*).where()
  */


  app.use(routes);
  app.use(errors());

module.exports = app;