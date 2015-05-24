module.exports = function(mongoose){
	var empresaSchema = mongoose.Schema({
	    nombre		: String,
	    razonSocial	: String,
	    nit			: String,
	    representanteLegal: String,
	    estado : String,
	    created : { type: Date, default: Date.now },
	    metadata : Object
	});

	return mongoose.model('empresa', empresaSchema, 'empresa');
}


