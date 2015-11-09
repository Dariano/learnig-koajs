'use strict'

let Todo = require('../models/todo');
let parse = require('co-body');

module.exports.create = function *create(){
	let body = yield parse(this);
	let todoCreate = yield Todo.create(body);

	if(!todoCreate){
		this.status = 404;
		return;
	}

	this.status = 201;
	this.body = todoCreate;
}

module.exports.getAll = function *getAll(){
	let allTodo = yield Todo.find({}).exec();
	this.body = allTodo ? allTodo : this.status = 404;
}

module.exports.get = function *get() {
	let getTodo = yield Todo.findOne({_id : this.params.id}).exec();
	this.body = getTodo ? getTodo : this.status = 404;
}

module.exports.del = function *del() {
	let delTodo = yield Todo.remove({_id : this.params.id});
	this.status = delTodo ? 204 :  404;
}

module.exports.update = function *update(){
	let body = yield parse(this);
	let todoUpdate = yield Todo.update({_id : this.params.id}, body);
	console.log('todoUpdate.nModified', todoUpdate.nModified)
	if(!todoUpdate.nModified){
		this.status = 404;
		return;
	}

	this.status = 202;
	this.set('location', '/api/todos/' + this.params.id);
}