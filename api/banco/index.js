var banco = function(router, args){
	router.get('/banco', function(req, res, next) {
 		res.setHeader('Content-Type', 'application/json');

 		args.schema.find({}, function(err, values){
 			if(!err){
				res.send(JSON.stringify(values));	 				
 			}
		});

	});

	router.get('/banco/:id', function(req, res, next){
 		res.setHeader('Content-Type', 'application/json');
 		
 		args.schema.findOne({_id : req.param('id')}, function(err, value){
 			if(!err){
 				res.send(JSON.stringify(value));
 			}
 		});
	});

	router.post('/banco', function(req, res, next) {
 		res.setHeader('Content-Type', 'application/json');
 		var _banco = new args.schema({
 			nombre 				: req.body.nombre,
 			created 			: new Date(),
			metadata			: req.body.metadata
 		});

 		_barrio.save(function(err, value){
 			if(!err){
 				res.send(JSON.stringify(value));
 			}
 		});
	});

	router.put('/banco/:id', function(req, res, next) {
 		res.setHeader('Content-Type', 'application/json');
 		args.schema.findById({_id : req.param('id')}, function(err, value){
 			if(!err){
	 			value.nombre 				= req.body.nombre;
				value.metadata				= req.body.metadata;
				value.updated				= new Date();

 				value.save(function(err, updated){
 					res.send(JSON.stringify(updated));
 				});
 			}
 		})
	});

	router.delete('/banco/:id', function(req, res, next) {
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

module.exports = banco;