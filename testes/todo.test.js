'use strict'

var should = require('chai').should();
var Todo = require('../models/todo');

describe('modeles test todo', () => {
	
	let body = {
		details: "Hello Todo"
	}
	
	let todo = new Todo(body);
	
	it('deve ser um objeto o Todo', () => {
		todo.should.be.a('object');
	})
	
	it('deve ter as propriedades descricao, data e status', () => {
		
		todo.should.be.a('object');
		todo.should.have.property('details');
		todo.should.have.property('initalDate');
		todo.should.have.property('isDone');
	});
})