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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let queue = []
    let res = []

    if (root !== null) {
        queue.push(root)
    }

    while (queue.length > 0) {
        let lv = queue.length
        res.push(queue[lv-1].val)
        for (let i=0; i<lv; i++) {
            let cur = queue.shift()
            if (cur.left !== null) {
                queue.push(cur.left)
            }
            if (cur.right !== null) {
                queue.push(cur.right)
            }
        }
    }
    return res
};