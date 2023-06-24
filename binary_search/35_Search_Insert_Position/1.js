/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
* You can read about this solution in the link below
* https://leetcode.com/problems/search-insert-position/solutions/423166/binary-search-101/
* */
var searchInsert = function(nums, target) {
    let lo = 0, hi = nums.length; // we might need to inseart at the end
    while(lo < hi) { // breaks if lo == hi
        let mid = lo + Math.floor((hi-lo)/2); // always gives the lower mid
        if (target > nums[mid]) {
            lo = mid + 1 // no way mid is a valid option
        } else {
            hi = mid // it might be possibe to inseart @ mid
        }
    }
    return lo;
};

console.log(searchInsert([1,3,5,6], 5))
