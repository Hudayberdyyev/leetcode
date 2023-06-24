/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = Object();
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = i
    }
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        if(obj[diff] && i !== obj[diff]) return [i,obj[diff]]
    }
};

console.log(twoSum([2,7,11,15], 9))
