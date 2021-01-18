'use strict'

const User = require('../models/users');

const deleteUsersById = (req, res, next) => {
  const { userId } = req.params;

  User.deleteOne({ _id: userId }, (err, result) => {
    if (err) {
      return next(err);
    }

    return next();
  });
};

const getUsersById = (req, res, next) => {
  const {userId} = req.params;

  User.findById({ _id: userId }, (err, result) => {
    if (err) {
      return next(err);
    }

    req.resources.users = result;
    return next();
  });
};


const getUsers = (req, res, next) => {
  User.find((err, result) => {
    if (err) {
      return next(err);
    }

    req.resources.users = result;
    return next();
  });
}

const createUser = (req, res, next) => {
  const user = new User(req.body);

  user.save((err, result) => {
    if(err) {
      // return res.status(404).json(err);
      err.statusCode = 401;
      return next(err);
    }

    req.resources.users = result;
    return next();
  });
};

const mid1 = (req, res, next) => {
  console.log('users route generic 1', req.body);
  next()
};

const mid2 = (req, res, next) => {
  console.log('users route generic 2');
  next()
};

const mid3 = (req, res, next) => {
  console.log('users route generic 3');
  return res.json({ text: 'Hello GET' })
};

module.exports = {
  mid1,
  mid2,
  mid3,
  createUser,
  getUsers,
  getUsersById,
  deleteUsersById
};
