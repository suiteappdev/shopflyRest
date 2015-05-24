module.exports = function(mongoose){
	var tipoUsuarioSchema = mongoose.Schema({
	    descripcion		: String,
	    created 		: { type: Date, default: Date.now },
	    metadata 		: Object
	});

	return mongoose.model('tipoUsuario', tipoUsuarioSchema, 'tipoUsuario');
}