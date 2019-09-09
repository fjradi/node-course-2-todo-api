var express = require('express'); //server side framework module
var bodyParser = require('body-parser'); //module for extracting body of post request

var {mongoose} = require('./db/mongoose.js') //equal with mongoose = require(...).mongoose
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json()); //use bodyParser middleware with only accept json data

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err); //400 means bad request
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {
    app
};