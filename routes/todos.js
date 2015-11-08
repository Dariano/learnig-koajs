'use strict'

const url = '/api/v1/todos';
let ctrl = require('../controllers/todo');

module.exports = require('koa-router')() 
			.post(url, ctrl.create)
			.get(url, ctrl.get)
			.routes();