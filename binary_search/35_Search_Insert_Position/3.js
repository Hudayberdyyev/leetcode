/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // push target into array
    nums.push(target)
    // sort array
    nums.sort(function(a, b) {
        return a - b;
    });
    // return index of target
    return nums.indexOf(target)
};

console.log(searchInsert([1,2,3,4,5,10], 2))
