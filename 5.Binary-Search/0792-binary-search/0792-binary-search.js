/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let L = 0, R = nums.length - 1

    while (L<=R) {
    // let mid = Math.floor((L+R)/2)
    let mid = Math.floor(L + (R - L) / 2)

        if (target < nums[mid]) {
            R = mid-1
        } else if (target > nums[mid]) {
            L = mid+1
        } else { 
            return mid 
        }
    }

    return -1
};
