
const fibonacci = function(n, memo ={}) {
    // use memoization to have an optimized performance
    if(n < 0) return "OOPS";
    if(memo[n]){
        return memo[n];
    } else if(n <= 2) return 1;
    else{
        memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
        return memo[n];
    }
};
// Do not edit below this line
module.exports = fibonacci;