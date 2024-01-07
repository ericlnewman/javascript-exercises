const convertToCelsius = function(f) {
    let c = (f - 32) * (5/9);
    return c.toFixed(1);
};

const convertToFahrenheit = function(c) {
    let f = (c * 9/5) + 32;
    return f.toFixed(1);
};
console.log(convertToFahrenheit(0));
console.log(convertToCelsius(32));
console.log(convertToFahrenheit(73.2));
console.log(convertToCelsius(100));
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};