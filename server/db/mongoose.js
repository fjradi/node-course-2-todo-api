var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //use promise instead callback
mongoose.connect('mongodb://localhost:27017/TodoApp'); //connect to a database

module.exports = {
    mongoose
};