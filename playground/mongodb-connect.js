const MongoClient = require('mongodb').MongoClient; //MongoDB module

//connect to a database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    //insert new doc to a collection
    db.collection('Users').insertOne({
        name: 'Anisa',
        age: 19,
        loc: 'Bandung'
    }, (err, result) => {
        if (err){
            return console.log('Unable to insert user', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
    });

    //don't forget to close the connection
    client.close();
})