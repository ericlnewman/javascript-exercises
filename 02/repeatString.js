const repeatString = function(string, num) {
    let s = "";
    if(num < 0) return "ERROR";
    for(let i = 0; i < num; i++){
        s+=string;
    }
    return s;
};
module.exports = repeatString;