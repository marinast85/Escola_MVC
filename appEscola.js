var express = require ("express");
const app = express();
var mongoose = require("mongoose");

const port= 3000;

mongoose.connect("mongodb+srv://marina_toledo:marina_toledo@cluster0.ae6hs.mongodb.net/Escola_MVC?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true});

//Template view EJS (Motor V8)
app.set("view engine", "ejs"); 
app.set("views", __dirname, "/views");

// Arquivo que permite que os dados sejam enviados através de formulários
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 

//inicando a rota dos alunos
//criação da rota que está sendo exportada. As demais rotas criadas a partir dela, devem seguir como: /alunos/"alguma coisa"
const alunos_router = require("./routers/alunos-router");

app.use("/alunos", alunos_router);

app.get("/", (req, res) => {
    res.send("Iniciando a página")
});

//conexão com o servidor ...aplicação de "escuta" da porta (de quem bate e pede pra entrar)
app.listen(port, () => {
    console.log("Servidor rodando na porta", +port);
});
