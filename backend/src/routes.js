const express = require("express");

const Alunos = require('./controllers/AlunoController');

const routes = express.Router();

routes.get('/alunos',AlunoController.index);
routes.post('/alunos',AlunoController.create);
routes.put('/alunos/:id', AlunoController.put);
routes.delete('/alunos/:id', AlunoController.delete);

module.exports = routes;