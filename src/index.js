let foods = require("./names.json");
let uniqueRandomArray = require("unique-random-array");
modules.exports = {
  foods,
  random: uniqueRandomArray(foods),
};
