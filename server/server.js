var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


var User = mongoose.model('User',{
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    }
});

var user = new User({
    email: ' example@gmail.com '
});

user.save().then((doc)=>{
    console.log('saving user', doc);
}, (err)=>{
    console.log('Unable to save user', err);
});
