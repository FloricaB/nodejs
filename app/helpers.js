"use strict"

const getCurrentDate = () => {
  return new Date();
}

const responseToJson = (propItem) => {
  return (req, res, next) => {
    res.json(req.resources[propItem]);
  }
}

// exports function
module.exports = {
  getCurrentDate,
  responseToJson,
};
