'use strict';

const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const authCtrl = require('../controllers/authorization');
const helpersCtrl = require('../helpers');

router.use('/users', authCtrl.isLogged);

//route level middleware
router.get('/users',
  usersCtrl.getUsers,
  helpersCtrl.responseToJson('users')
);

router.get('/users/:userId',
  usersCtrl.getUsersById,
  helpersCtrl.responseToJson('users')
);

router.post('/users',
  authCtrl.isAdmin,
  usersCtrl.createUser,
  helpersCtrl.responseToJson('users')
);

router.delete(
  '/users/:userId',
  usersCtrl.getUsersById,
  usersCtrl.deleteUsersById,
  helpersCtrl.responseToJson('users')
);

router.put('/users', function (req, res, next) {
  console.log('users route PUT');
  return res.json({ text: 'Hello PUT' });
});

module.exports = router;
