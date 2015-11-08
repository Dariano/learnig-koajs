'use strict'

let model = require('../models/todo');
let parse = require('co-body');

module.exports.create = function *create(){
	let body = yield parse(this);
	let todoCreate = yield model.create(body);
	
	if(!todoCreate){
		this.status = 404;
		return;
	}
	
	this.status = 201;
	this.body = todoCreate;
}

module.exports.get = function *(){
	let getTodo = yield model.find({}).exec();
	this.body = getTodo;
}