const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
    let sum = 0;
	for(let a of arr){
        sum+=a;
    }
    return sum;
};

const multiply = function(arr) {
    let mult = 1;
    for(let m of arr){
        mult *=m;
    }
    return mult;
};

const power = function(a,b) {
	return Math.pow(a, b);
};
// recursive function with memoization to find the factorial (dynamic programming)
const memo = [];
const factorial = function(n) {
    if(!memo[n]){
        memo[n] = n <= 1? 1 : n * factorial(n-1);
    }
    return memo[n];
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};