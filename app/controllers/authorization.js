'use strict';

const userIsAdmin = true;
const userIsLogged = true;

const isAdmin = (req, res, next) => {
  if (userIsAdmin) {
    return next();
  }

  return res.json({ errorMessage: 'You are not admin' });
}

const isLogged = (req, res, next) => {
  if (userIsLogged) {
    return next();
  }

  return res.json({ errorMessage: 'You are not logged' });
}

module.exports = {
  isAdmin,
  isLogged,
};
