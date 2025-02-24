/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set()
    for (let num of nums) {
        if (set.has(num)) {
            return true
        } 
        // else {
        //     set.add(num)
        // }
        // 쓸데 없는 분기는 제거하는 게 좋음
        set.add(num)

    }
    return false
};