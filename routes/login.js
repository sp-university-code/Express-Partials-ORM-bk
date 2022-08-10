var express = require('express');
var router = express.Router();

let bd = {
  'usuario':'abc',
  'contrasena':'123'
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/validate',(req,res,next)=> {
  let usuario = req.body.user
  let contrasenia = req.body.password

  console.log("usuario: ",usuario)
  console.log("contrasena: ",contrasenia)

  //validation
  if(usuario == bd['usuario'] && contrasenia==bd['contrasena']){
    res.redirect('/')
  }
  else{
    res.redirect('/login')
  }
})

module.exports = router;
