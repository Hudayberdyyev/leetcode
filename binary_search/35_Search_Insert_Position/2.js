/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
* You can read about this solution in the link below
* https://leetcode.com/problems/search-insert-position/solutions/3209717/easiest-js-method-outhere/
* */

var searchInsert = function(nums, target) {
    // includes,indexOf,rest operator,arrow function,sorting via sort method
    if(nums.includes(target))  //includes method
        return nums.indexOf(target); //returns index method//
    return [...nums, target].sort((a,b) => a-b).indexOf(target); //return where it shold be inserted//
};

console.log(searchInsert([1,3,5,6], 7))
