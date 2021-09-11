const express = require("express"); //fazendo a chamada do express //fazendo a chamada da função do express que vai trabalhar com as rotas. dessa froma ao inves de usarmos o app.get e app.post, usaremos router.get e router.post
const router = express.Router();

const alunosController = require("../controllers/alunos-controller")

router.get("/", alunosController.listagem_alunos);

router.get("/cadastrarAlunos", alunosController.cadastro_aluno_get);

router.get("/deletarAlunos/:id", produtosController.deletar_aluno);




module.exports = router //isso deve ficar sempre ao final da minha página de rotas.

