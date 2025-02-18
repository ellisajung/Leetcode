/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// /* 내 풀이 1 - 못풂... */
// /**
//  * @param {TreeNode} root
//  * @param {number} targetSum
//  * @return {boolean}
//  */
// var hasPathSum = function (root, targetSum) {
//   let total = root;

//   const backtrack = (root, path) => {
//     if (root === null) {
//       return 0;
//     }
//     if (root.left === null && root.right === null) {
//       return targetSum === total ? true : false;
//     }

//     total += backtrack(root.left, path);
//     total += backtrack(root.right, path);

//     return total;
//   };
// };

/* 다른 사람 풀이 1 */
var hasPathSum = function (root, sum) {
  const dfs = (node, curSum) => {
    if (!node) {
      return false;
      // 어떤 경우에 해당하는건지는 알겠는데, 왜 false를 리턴하지?
      // false 반환해야 || 연산자로 인해 다른 경로 탐색 가능
    }

    curSum += node.val;
    if (!node.left && !node.right) {
      return sum === curSum;
    }

    return dfs(node.left, curSum) || dfs(node.right, curSum);
  };

  return dfs(root, 0);
};
