const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '59b6a74511781b488df7088611';
//
// if (!ObjectId.isValid(id)) {
//   console.log('ID is not valid!');
// }

// Todo.find({
//   _id: id,
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id,
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found.');
//   }
//   console.log('Todo By ID', todo);
// }).catch((err) => console.log(err));

var id = '59b6b478128a8ed4c97620ce';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User ID not found.');
  }
  console.log('User By ID', user);
}, (err) => {
  console.log(err);
});
