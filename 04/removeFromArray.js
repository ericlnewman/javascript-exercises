const removeFromArray = function(nums, ...n) {
    function remove(arr1, arr2){
        const newArr = [];
        let  k = 0;
        for(let i = 0; i < arr1.length; i++){
            for(let j = k; j < arr2.length; j++){
                if(arr1[i] !== arr2[j] && !newArr.includes(arr1[i])){
                    newArr[k] = arr1[i];
                    k++;
                }
            }
        }
        return newArr;
    }
    return remove(nums, n);
};

console.log(removeFromArray([1,2,3,4,5], 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
module.exports = removeFromArray;