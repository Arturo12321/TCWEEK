var express = require('express');
var router = express.Router();

/* GET home page (index.ejs). */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio' });
});
/* GET secction page (concurso.ejs). */
router.get('/concurso', function(req, res, next) {
  res.render('concurso', { title: 'Concursos' });
});

/* GET secction page (objetivo.ejs). */
router.get('/objetivo', function(req, res, next) {
  res.render('objetivo', { title: 'Objetivo' });
});

/* GET secction page (inscripcion.ejs). */
router.get('/inscripcion', function(req, res, next) {
  res.render('inscripcion', { title: 'Inscripcion' });
});
module.exports = router;
