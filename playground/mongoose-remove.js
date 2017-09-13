const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove({ _id: '59b936d4b91bb6b9a2b64c42'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('59b936d4b91bb6b9a2b64c42').then((todo) => {
  console.log(todo);
});
