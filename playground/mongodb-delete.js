const MongoClient = require('mongodb').MongoClient; //MongoDB module

//connect to a database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat Lunch' }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });

    //don't forget to close the connection
    client.close();
});