'use strict';

const handlingError = (app) => {
  app.use((err, req, res, next) => {
    console.log('error middleware', err);

    return res.status(err.statusCode || 400).json({
      status: 'error',
      message: (err && err.message) || `Default error message`,
    });
  });
}

module.exports = {
  handlingError,
}
