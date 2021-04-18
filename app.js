const express = require('express');
//step 1 :import mongoose
const mongoose = require('mongoose');

//step 2 : make a connection to remote mdb server
mongoose.connect('mongodb+srv://shreya_24:Basketball8@cluster0.73hat.mongodb.net/quotesDB?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }, function(err){
        if(err){
            console.log("Error in connection", err);
        } else {
            console.log("connection to db complete");
        }
    });
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const quotesRouter = require('./routes/quotes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/quote', quotesRouter);

module.exports = app;
