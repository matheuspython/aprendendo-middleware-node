exports.paginaInicial = (req, res, next)=>{
    res.render('index');
    console.log(`oi ${req.session.nome}`)
    next();
}

exports.trataPost = (req, res) =>{
  const {nome} = req.body
  res.send(`ola ${nome}`)
}