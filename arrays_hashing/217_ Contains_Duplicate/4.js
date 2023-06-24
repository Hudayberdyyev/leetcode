/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newSet = new Set(nums);
    return newSet.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1]));
