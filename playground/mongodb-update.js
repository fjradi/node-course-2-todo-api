const MongoClient = require('mongodb').MongoClient; //MongoDB module

//connect to a database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        text: 'Eat Lunch'
    }, {
        $set: {
            completed: false
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    })

    //don't forget to close the connection
    client.close();
});