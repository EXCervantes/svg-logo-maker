// Import all the shape files then export them into one object for index.js
const { Circle } = require('./circle.js');
const { Square } = require('./square.js');
const { Triangle } = require('./triangle.js');

module.exports = { Circle, Square, Triangle };