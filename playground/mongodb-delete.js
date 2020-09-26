const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: "Learn regex"}).then((result)=>{
    //     console.log(result);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({text: "Node fundamentals"}).then((result)=>{
    //     console.log(result);
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // });
    // db.collection('Todos').deleteMany({text: "Node fundamentals"}).then((result)=>{
    //     console.log(result);
    // })
    db.collection('Todos').findOneAndDelete({_id: new ObjectID("5f6ec18dd344d8693b2f0bf8")}).then((result)=>{
        console.log(result);
    });
    // db.close();
});