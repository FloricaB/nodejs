"use strict"

//npm init
//npm i --save express
//node -v
//npm -v
//npm install -g nodemon
//npm install --save-dev nodemon

//you can use require or import if you setup babel
const express = require('express');
// import express from 'express';
const app = express();
const config = require('./config/index');

//init configs, the order of the files is very important, always initExpress then initRoutes
require('./config/express').initExpress(app);
require('./config/routes').initRoutes(app);
require('./config/mongoose').initMongoose();
require('./config/handlingFinalRoute').handlingFinalRoute(app);
require('./config/handlingError').handlingError(app);
//end init configs

app.listen(config.PORT, function() {
  console.log(`App is running on port ${config.PORT}`);
});
