/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */

// approach
// nums = [0,1,4,6,7,10], diff = 3
//         i j k
var arithmeticTriplets = function(nums, diff) {
    let count = 0
    for (let i=0; i<nums.length-2; i++) {
        for (let j=1; j<nums.length-1; j++) {
            for (let k=2; k<nums.length; k++) {
                if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff) {
                    count++
                }
            }
        }
    }
    return count
};