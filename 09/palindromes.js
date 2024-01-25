const palindromes = function (str) {
    // change the str to lower case and remove all non-alphanumeric chars with regex
    let s = str.toLowerCase().replace(/[^a-z0-9]/gi,"");
    s.toLowerCase();
    const reverse = s.split("").reduce((prev, curr) => curr.toLowerCase() + prev, "");
   // console.log("reverse is " + reverse + "\nwhile s is " + s);
    if(reverse == s) return true;
    return false;
};
// Do not edit below this line
 module.exports = palindromes;