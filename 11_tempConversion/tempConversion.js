const convertToCelsius = function(temp) {
  let c = (temp - 32) * 5 / 9;
  let rounded = Math.round(c * 10) / 10;  
  return rounded;
};

const convertToFahrenheit = function(temp) {
  let f = temp * 9 / 5 + 32;
  let rounded = Math.round(f * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
