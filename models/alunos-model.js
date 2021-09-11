var mongoose = require ("mongoose");

const Alunos = mongoose.model ("alunos", {
    nome: String,
    genero: String,
    serie: String,
    turma: String
});

module.exports = Alunos;