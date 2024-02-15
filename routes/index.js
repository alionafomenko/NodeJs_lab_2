var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/ira', function(req, res) {
  res.render('student', { studentName: 'Iryna',studentPhoto: "/images/photo_ira.jpg", studentSurname:'Mykytenko',link:'https://kpi.ua/ist-fiot', place:'ФІОТ', studentAge: 19 });
});
router.get('/vika', function(req, res)  {
  res.render('student', { studentName: 'Victoria',studentPhoto: "/images/photo_vika.jpg", studentSurname:'Patryk',link:'https://kpi.ua/ist-fiot', place:'ФІОТ', studentAge: 18 });
});
router.get('/elvira', function(req, res) {
  res.render('student', { studentName: 'Elvira',studentPhoto: "/images/photo_elvira.jpg", studentSurname:'Tretiakova',link:'https://kpi.ua/ist-fiot', place:'ФІОТ', studentAge: 18 });
});

router.get('/alona', function(req, res)  {
  res.render('student', { studentName: 'Alona',studentPhoto: "/images/photo_alona.jpg",
    studentSurname:'Fomenko',link:'https://kpi.ua/ist-fiot', place:'ФІОТ', studentAge: 18 });
});

module.exports = router;
