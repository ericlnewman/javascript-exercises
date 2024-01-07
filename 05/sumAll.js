const sumAll = function(a, b) {
    if(typeof(a) != "number"|| typeof(b) != "number" || a < 0) {
        return "ERROR";
    } else {
        let min = Math.min(a,b);
        let max = Math.max(a,b);
        for(let i = min; i <= max; i++){
            min+=i;
        }
        return min-1;
    }
    
};
module.exports = sumAll;