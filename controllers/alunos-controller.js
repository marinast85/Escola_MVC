//onde as rotas serão trabalhadas de fato
const Info_BD = require ("../models/alunos-model");

exports.listagem_alunos = (req, res) =>{
    Info_BD.find({}, (err, alunos) =>{
        if(err)
            return res.status(500).send("Erro ao fazer a consulta de alunos");
        res.render("views/pages/alunos", {resultado:alunos});    
    });
};

exports.cadastrar_alunos_get = (req, res) => {
    res.render("views/pages/formAlunos");
};

//rota para salver os alunos que estão sendo cadastrados no banco de dados
exports.cadastrar_alunos_post = (req, res) => {
    let salva_alunos = new Info_BD();

    salva_alunos.nome = req.body.nome;
    salva_alunos.genero = req.body.genero;
    salva_alunos.serie = req.body.serie;
    salva_alunos.turma = req.body.turma;

    salva_alunos.save((err) => {
        if (err)
            return res.status(500).send("Erro ao cadastrar");
        return res.redirect("/alunos")
    });
};

exports.deletar_alunos = (req, res) => {
    var id = req.params.id;
    Produtos_BD.deleteOne({ _id: id }, (err) => {
        if (err)
            return res.status(500).send("Erro ao deletar");
        res.redirect("/alunos");
    });
};


