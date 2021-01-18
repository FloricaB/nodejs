'use strict';

const mongoose = require('mongoose');
//used for general middlewares

const initMongoose = () => {
  mongoose.connect(
    'mongodb://127.0.0.1:27017/aries',
    {
      //portul de mongoose 27017
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  );

  const db = mongoose.connection;

  db.on('error', function(err) {
    console.log('err', err);
  });

  db.once('open', function() {
    console.log('connected to mongodb');
  });

  // process.on('signin', cleanup());
}

const cleanup = () => {
  console.log('cleanup');
  mongoose.connection.close(() => {
    process.exit();
  })
}

module.exports = {
  initMongoose,
};
