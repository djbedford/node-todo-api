// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo-App', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }

  console.log('Connected to MongoDB server.');

  // db.collection('Todos').deleteMany({ text: 'Go to the shop' }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({ text: 'Go to the shop' }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});
