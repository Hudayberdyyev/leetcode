/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
* You can read about approach in the link below:
* https://leetcode.com/problems/two-sum/solutions/3000141/javascript-w-map-time-space-o-n/
* */

var twoSum = function(nums, target) {
    let mp = new Map()

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]

        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }

        mp.set(nums[i], i)
    }
};
console.log(twoSum([2,7,11,15], 9))
