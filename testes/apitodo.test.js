'use strict'

let should = require('chai').should();
let ch = require('charlatan');
let request = require('superagent');
let url = require('url');

const baseUrl = 'http://localhost:3000/api/v1/todos';

describe('routes Todo', () => {
	let body = {
		details: ch.Name.name()
	}

	let id = null;

	it('deve criar um Todo', (done) => {
		request
			.post(url.resolve(baseUrl, 'todos'))
			.send(body)
			.end(function(err, res){
				res.body.details.should.be.exist;
				res.body._id.should.be.exist;
				res.status.should.be.eql(201);
				id = res.body._id;
				done();
			})
	});

	it('deve obter todos os Todo', (done) => {
		request
			.get(url.resolve(baseUrl, 'todos'))
			.end(function(err, res){
				res.body.should.be.a('Array');
				done();
			})
	});

	it('deve obter somente um Todo pelo id', (done) => {
		request
			.get(url.resolve(baseUrl, 'todos/'  + id))
			.end((err, res) => {
				res.body.should.be.a('object');
				res.status.should.be.eql(200);
				res.body._id.should.be.exist;
				done();
			})
	});


	it('deve atualizar Todo pelo id', (done) => {
		var body = {
		      	isDone : true
		    };

		request
			.put(url.resolve(baseUrl, 'todos/'  + id))
			.send(body)
			.end((err, res) => {
				res.status.should.be.ok;
				res.status.should.be.eql(202);
				done();
			})
	});

	it('deve remover Todo pelo id', (done) => {
		request
			.del(url.resolve(baseUrl, 'todos/'  + id))
			.end((err, res) => {
				res.should.be.exist;
				res.status.should.be.eql(204);
				done();
			})
	});

})