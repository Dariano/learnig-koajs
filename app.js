'use strict';

let koa = require('koa');
let routes = require('koa-route');
let app = koa();
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo');


app.use(require('./routes/todos'))

app.listen(3000);