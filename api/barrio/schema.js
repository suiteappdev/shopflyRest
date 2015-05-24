module.exports = function(mongoose){
	var barrioSchema = mongoose.Schema({
	    descripcion		: String,
	    created 		: { type: Date, default: Date.now },
	    metadata 		: Object
	});

	return mongoose.model('barrio', barrioSchema, 'barrio');
}