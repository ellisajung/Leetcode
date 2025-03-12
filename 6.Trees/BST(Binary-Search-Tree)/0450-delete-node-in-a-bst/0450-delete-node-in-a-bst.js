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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    // base case
    if (root === null) {
        return null
    }

    // key 노드 탐색
    if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else {
        if (root.right === null) {
            return root.left // left subtree 반환
        } else if (root.left === null) {
            return root.right // right subtree 반환
        } else {
            const min = minNode(root.right)
            root.val = min.val
            root.right = deleteNode(root.right, min.val)
        }
    }

    return root
};


function minNode(root) {
    let curr = root
    while (curr !== null && curr.left !== null) {
        curr = curr.left
    }
    return curr // 노드 값이 아닌 노드 자체 반환
}
