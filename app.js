
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/dados', function (req, res) {
    var dados = [{
        id: 1,
        nome: "Silvia",
        data_de_nascimento: "2010-12-30",
        sexo: "Feminino",
        rg: "330213076",
        cpf: "12345",
        senha: "12345",
        ativo: 1,
        nome_do_aluno: 'Filho de Silvia'
    },
    {
        id: 2,
        nome: "Manolo",
        data_de_nascimento: "2012-08-12",
        sexo: "",
        rg: "357918137",
        cpf: "96042560093",
        senha: "12345",
        ativo: 1
    },
    {
        id: 3,
        nome: "mathias",
        data_de_nascimento: "2009-07-08",
        sexo: "Masculino",
        rg: "215626321",
        cpf: "42275190040",
        senha: "12345",
        ativo: 1,
    }];
        res.send(JSON.stringify(dados));
});

app.listen(8080, function () {
    console.log('Servidor rodando na porta 8080.');
});