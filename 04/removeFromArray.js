const removeFromArray = function(nums, ...n) {
    for(let i = 0; i < nums.length; i++){
        for(let number of n){
            if(nums[i] === number){
                nums.splice(i, 1);
            }
        }
    }
    return nums;
};
module.exports = removeFromArray;