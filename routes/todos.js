'use strict'

const url = '/api/v1/todos';
let ctrl = require('../controllers/todo');

module.exports = require('koa-router')()
            .get(url + '/:id', ctrl.get)
            .get(url, ctrl.getAll)
            .post(url, ctrl.create)
            .del(url + '/:id', ctrl.del)
            .put(url + '/:id', ctrl.update)
            .routes();