module.exports = (req,res,next) =>{
  console.log()
  console.log('passe no middleware global')
  console.log()
  next()
}