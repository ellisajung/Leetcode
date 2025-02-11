/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1, right = n

    while (left <= right) {
        let pick = Math.floor((left + right) / 2)
        let res = guess(pick)

        if (res === 0) {
            return pick
        } else if (res === -1) {
            right = pick - 1
        } else {
            left = pick + 1
        }
    }
};