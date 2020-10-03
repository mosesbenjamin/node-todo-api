const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id: 9
}

const token = jwt.sign(data, '123abc')
// console.log(token)

const decoded = jwt.verify(token, '123abc')
console.log('Decoded')
console.log(decoded)

// const message = 'I am user number one';
// const hash = SHA256(message).toString();

// console.log(`Message; ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//     id: 4
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'some secret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();


// let resultHash = SHA256(JSON.stringify(token.data) + 'some secret').toString();

// if(resultHash === token.hash){
//     console.log('Data was not changed')
// }else {
//     console.log('Data was changed. Don\'t trust')
// }