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
	
	it('deve criar um Todo', (done) => {
		request
			.post(url.resolve(baseUrl, 'todos'))
			.send(body)
			.end(function(err, res){
				res.body.details.should.be.exist;
				done();
			})
	});
	
	it('deve criar um Todo', (done) => {
		request
			.get(url.resolve(baseUrl, 'todos'))
			.end(function(err, res){
				res.body.should.be.a('Array');
				done();
			})
	});
	
})