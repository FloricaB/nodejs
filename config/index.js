'use strict';

const ENV = process.env.NODE_ENV || 'development';
console.log('pro.env.NODE_ENV', process.env.NODE_ENV);
console.log('ENV', ENV);
const config = require(`./environments/${ENV}`);

console.log('CONFIG FROM ENVIRONMENTS', config);
module.exports = config;
