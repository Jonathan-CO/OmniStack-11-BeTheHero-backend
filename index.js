const express = require("express");

const app = express();

app.use(express.json());

/**
 * Tipos de Parâmetro
 * Query Params: parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 *               Acesso: const query  = req.query
 * Route params: parametros para identificar recursos (users/:id))
 *               Acesso: const params = req.params
 * Request Body: parametros utilizados para enviar informações
 */

app.get('/',(req, res)=>{
    return res.json({
        evento: "Semana OmniStack",
        aluno: "Jonathan da Cunha Oliveira"
    });
})

app.listen(3333);