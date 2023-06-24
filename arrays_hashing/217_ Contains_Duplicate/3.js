/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Set data structure simple explanation
var containsDuplicate = function(nums) {

    const set = Array();

    for (let i = 0; i < nums.length; i++) {
        let isExist = false;
        for (let j = 0; j < set.length; j++) {
            if (nums[i] === set[j]) {
                isExist = true;
                break;
            }
        }
        if (!isExist) set.push(nums[i]);
    }

    return set.length !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1]));
