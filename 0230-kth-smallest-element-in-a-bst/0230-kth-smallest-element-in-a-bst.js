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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let cur = k;
    let result = null;  // 결과 값을 저장할 변수
    
    const inorder = (root) => {
        if (root === null) return;
        
        inorder(root.left);
        cur--;
        if (cur === 0) {
            result = root.val; // 값을 저장
            return;  // 탐색 종료
        }
        inorder(root.right);
    };

    inorder(root);
    return result;  // 저장된 결과 반환
};

