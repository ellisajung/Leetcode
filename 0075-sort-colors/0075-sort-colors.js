/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const counts = [0, 0, 0]
    
    // counting
    for (let num of nums) {
        counts[num]++
    }

    // overriding
    let i = 0
    for (let j=0; j<counts.length; j++) {
        while (counts[j]>0) {
            nums[i] = j
            counts[j]--
            i++
        }
    }

    return nums
};