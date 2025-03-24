const express = require('express');
const {result} =  require('lodash');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.listen('3000');
app.set('view engine', 'ejs');





