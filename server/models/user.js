const mongoose = require('mongoose');
const validator = require('validator');

// {
//     email: 'mavewrick@example.com',
//     password: 'myPass123',
//     tokens: [{
//         access: 'auth',
//         token: 'iohriuhruhihguirhguirhe'
//     }]
// }

var User = mongoose.model('User',{
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

module.exports = {User};
