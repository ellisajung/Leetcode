/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [], sol = []

    const backtrack = (i, sum) => {
        // base case 1
        if (sum === target) {
            res.push([...sol])
            return
        }
        // base case 2
        if (sum > target || i === candidates.length) {
            return
        }

        backtrack(i+1, sum)

        sol.push(candidates[i])
        backtrack(i, sum + candidates[i])

        sol.pop()
    }

    backtrack(0, 0)

    return res

}
            