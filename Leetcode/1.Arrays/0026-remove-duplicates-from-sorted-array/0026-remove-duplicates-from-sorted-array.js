// Two pointers
// left: index to put the next unique element
// right: index that are currently searching
// nums = [0,0->1,1,1,1,2,2,3,3,4]
//                l       r
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    let l=0, r=1

    while (r < nums.length) {
        if (nums[l] === nums[r]) {
            r++
        } else {
            l++
            nums[l] = nums[r]
            r++
        }
    }

    return l+1

};