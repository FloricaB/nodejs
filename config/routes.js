'use strict'

const path = require('path');

const initRoutes = (app) => {
  const routesPath = path.join(__dirname, '../app/routes');
  const routes = ['users', 'posts'];

  routes.forEach((route) => {
    const finalPath = `${routesPath}/${route}`;
    app.use(require(finalPath)); //api is important
  });

  // app.use(require(`${routesPath}/users`));
  // app.use(require(`${routesPath}/stories`));
}

module.exports = {
  initRoutes,
};
