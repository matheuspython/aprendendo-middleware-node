const express = require('express');
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require("./src/controllers/contatoController")

function meuDiddleware(req, res, next) {
  req.session = { nome: 'Matheus', sobrenome: 'souza'}

  console.log()
  console.log('sou um middleware')
  console.log()
  next()
}

//rotas home
route.get('/',meuDiddleware, homeController.paginaInicial, () =>{
  console.log('oie estou sendo chamado pois transformei o controller em outro meuDiddleware ;)')
});
route.post('/enviado', homeController.trataPost);

//rotas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;