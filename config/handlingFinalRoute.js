'use strict';

const handlingFinalRoute = (app) => {
  app.all('*', (req, res, next) => {
    console.log('App all');
    return res.status(404).json({
      status: 'fail',
      message: `Can't find ${req.url} in this app.`,
    });
  });
}

module.exports = {
  handlingFinalRoute,
}
