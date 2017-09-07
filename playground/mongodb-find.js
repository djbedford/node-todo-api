// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo-App', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }

  console.log('Connected to MongoDB server.');

  // db.collection('Todos').find({
  //   _id: new ObjectId('59b01c4eecb75f06911ef5e8')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos.', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos.', err);
  // });

  db.collection('Users').find({ name: 'David' }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos.', err);
  });

  // db.close();
});
