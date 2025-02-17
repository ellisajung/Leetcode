/* 풀이 1 - 이해 안감....그리고 dp에 가까움 */
/* 
base case:
    1. the sum of steps = n
    2. the sum of steps > n
decision tree: n=5
            0
       +1 /    \ +2
         1      2
       /    \     /   \
      2      3    3    4
    / \     / \  / \   / \
   3  4    4  5 4 "5" "5" "6"
  / \  / \
 4 "5" ...
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
