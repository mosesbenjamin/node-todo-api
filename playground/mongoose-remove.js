const { ObjectID } = require('./../server/db/mongoose');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({})
// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: "5f7401dc826daa5d6f13e401"}).then(todo=>{

// })

Todo.findByIdAndRemove("5f7401dc826daa5d6f13e401").then(todo=>{
    console.log(todo)
})