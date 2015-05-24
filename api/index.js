var router = require('express').Router();
var mongoose = require('mongoose');
//Empresas 
var empresa = require('./empresa');
var empresaSchema = require('./empresa/schema')(mongoose);

//Tipo de usuarios
var tipoUsuario = require('./tipoUsuario');
var tipoUsuarioSchema = require('./tipoUsuario/schema')(mongoose);

//Barrio
var barrio = require('./barrio');
var barrioSchema = require('./barrio/schema')(mongoose);

//banco
var banco = require('./banco');
var bancoSchema = require('./banco/schema')(mongoose);

var cnx = require('../connection')({
	  user  : "armitage",
	  pwd   : "house1989*",
	  host  : "localhost",
	  database : "dbposerver",
	  port : 27017
});

//Map Route
empresa(router, {schema : empresaSchema, instance : mongoose});
tipoUsuario(router, {schema : tipoUsuarioSchema, instance : mongoose});
barrio(router, {schema : barrioSchema, instance : mongoose});
banco(router, {schema : bancoSchema, instance : mongoose});

module.exports = router;