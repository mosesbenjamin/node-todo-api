const { ObjectID } = require('./../server/db/mongoose');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "5f7280c30d80bd9c1b772fa1";

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// };

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found')
//     }
//     console.log('Todo By Id', todo);
// }).catch(e=>console.log(e));

var id= "5f710a9eecf465b404e57cd0"

User.findById({_id: id}).then((user)=>{
    if(!user){
        return console.log('User not found!');
    }
    console.log('User By Id', user);
}).catch(e=>console.log(e));