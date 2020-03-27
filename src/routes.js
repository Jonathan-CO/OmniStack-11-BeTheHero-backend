const express = require('express');
const routes = express.Router();

routes.get('/',(req, res)=>{
    return res.json({
        evento: "Semana OmniStack",
        aluno: "Jonathan da Cunha Oliveira"
    });
});

module.exports = routes;