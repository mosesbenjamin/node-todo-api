const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // findOneAndUpdate
    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID("5f6ebc1e47493d2c586e3c64")
    // }, {
    //     $set: {
    //         name: "mavewrick"
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result=>{
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5f6eb95e5b4c6a226874f2b3")
    }, {
        $set: {
            name: "Benjamin",
            location: "UK"
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then(result=>{
        console.log(result);
    })
    // db.close();
});