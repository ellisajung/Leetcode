/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  const dfs = (node, curSum) => {
    if (!node) {
      return false;
    }

    curSum += node.val;
    if (!node.left && !node.right) {
      return sum === curSum;
    }

    return dfs(node.left, curSum) || dfs(node.right, curSum);
  };

  return dfs(root, 0);
};
