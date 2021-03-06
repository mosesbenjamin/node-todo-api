// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     };
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Mavewrick',
    //     age: 20,
    //     location: "Nigeria"
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     };
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    // });
    db.collection('Todos').insertOne().then(todo=>{
        console.log('Todo created');
        console.log(JSON.stringify(todo.ops, undefined, 2));
    }, (err)=>{
        console.log('Unable to insert todo', err)
    });

    db.close();
});