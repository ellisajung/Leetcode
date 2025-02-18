// Two pointer
// l: the last index of element that's not equal to val
// r: the index that are currently searching
// nums = [3,2,2,3], val = 3
//         l r
//         
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    let l=0,r=0

    while (r < nums.length) {
        if (nums[r]===val) {
            r++
        } else {
            nums[l] = nums[r]
            l++
            r++
        }
    }

    return l
};