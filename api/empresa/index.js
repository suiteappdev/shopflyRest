var empresa = function(router, args){
	router.get('/empresa', function(req, res, next) {
 		res.setHeader('Content-Type', 'application/json');

 		args.schema.find({}, function(err, values){
 			if(!err){
				res.send(JSON.stringify(values));	 				
 			}
		});

	});

	router.get('/empresa/:id', function(req, res, next){
 		res.setHeader('Content-Type', 'application/json');
 		
 		args.schema.findOne({_id : req.param('id')}, function(err, value){
 			if(!err){
 				res.send(JSON.stringify(value));
 			}
 		});
	});

	router.post('/empresa', function(req, res, next) {
 		res.setHeader('Content-Type', 'application/json');
 		var _empresa = new args.schema({
 			nombre 				: req.body.nombre,
 			representanteLegal 	: req.body.representanteLegal,
			nit					: req.body.nit,
			razonSocial			: req.body.razonSocial,
			estado				: req.body.estado,
			metadata			: req.body.metadata
 		});

 		_empresa.save(function(err, value){
 			if(!err){
 				res.send(JSON.stringify(value));
 			}
 		});
	});

	router.put('/empresa/:id', function(req, res, next) {
 		res.setHeader('Content-Type', 'application/json');
 		args.schema.findById({_id : req.param('id')}, function(err, value){
 			if(!err){
	 			value.nombre 				= req.body.nombre;
	 			value.representanteLegal 	= req.body.representanteLegal;
				value.nit					= req.body.nit;
				value.razonSocial			= req.body.razonSocial;
				value.estado				= req.body.estado;
				value.metadata				= req.body.metadata;
				value.updated				= new Date();

 				value.save(function(err, updated){
 					res.send(JSON.stringify(updated));
 				});
 			}
 		})
	});

	router.delete('/empresa/:id', function(req, res, next) {
 		res.setHeader('Content-Type', 'application/json');
 		args.schema.findById({_id : req.param('id')}, function(err, value){
 			if(!err){
 				value.remove();
				res.sendStatus(200);
				return;
 			}

 			res.sendStatus(500);
 		})
	});

};

module.exports = empresa;