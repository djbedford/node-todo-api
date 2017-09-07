// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo-App', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }

  console.log('Connected to MongoDB server.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectId('59b15626782cb86f1c0b30ab'),
  // }, { $set:
  //   {
  //     completed: true,
  //   }
  // }, {
  //   returnOriginal: false,
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId('59b11503b516c326668c5b01'),
  }, {
    $set: {
      name: 'David',
    },
    $inc: {
      age: 1,
    }
  }, {
    returnOriginal: false,
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
