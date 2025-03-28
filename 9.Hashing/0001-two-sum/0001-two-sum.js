// map에 
// target-curr 없으면, [target-curr, index] set
// 있으면 [curr, target-curr] 반환
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for (let i=0; i<nums.length; i++) {
        if (map.has(target-nums[i])) {
            return [i, map.get(target-nums[i])]
        }
        map.set(nums[i], i)

    }
};