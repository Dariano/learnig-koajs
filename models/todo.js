'use strict'

function todoModel(){
	let mongoose = require('mongoose');
	let Schema = mongoose.Schema;
	let schema = null;

	schema = new Schema({
		details: { type : String, required: true, trin: true},
		initalDate: { type: Date, default: Date.now},
		isDone: { type: Boolean, default: false}
	})

	return mongoose.model('Todo', schema)
}

module.exports = todoModel();