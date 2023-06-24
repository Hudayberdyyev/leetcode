/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hashObj = Object();

    for (let i=0;i<nums.length; i++) {
        if (hashObj[nums[i]] === true) {
            return true;
        }
        hashObj[nums[i]] = true;
    }

    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]))
