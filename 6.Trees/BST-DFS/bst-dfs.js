/* 
BST Traversal - DFS

- It is commonly used to traverse trees and graphs. In this lesson we will focus on trees.
- Depth first search is best implemented using recursion, although it is possible to implement it iteratively using a stack.
- The idea is we pick a direction, say left, and keep following pointers as far down left as we can go until we reach null. 
  Once we reach null, we backtrack to the parent node and then go right. 
- "visit" could mean anything from printing the node to performing some operation on it.

There are three ways to traverse a tree using depth-first search:
    1. Preorder (전위):
        - visit the parent node first, 
        - then visit the left subtree 
        - and finally visit the right subtree.
        - 예) [4,3,2,6,5,7]
                 (1) 4
                   /   \
              (2) 3   6 (4)
                 /   /     \
            (3) 2   5 (5)   7 (6)

    2. Inorder (중위):
        - recurively visit all the nodes in the left subtree, 
        - then visit the parent node and 
        - finally visit all the nodes in the right subtree
        - 예) [2,3,4,5,6,7]
                 (3) 4
                   /   \
              (2) 3   6 (5)
                 /   /     \
            (1) 2   5 (4)   7 (6)

   

    3. Postorder (후위):
        - visit the left subtree, 
        - then the right subtree 
        - and finally the parent node last
        - 예) [2,3,5,7,6,4]
                 (6) 4
                   /   \
              (2) 3   6 (5)
                 /   /     \
            (1) 2   5 (3)   7 (4)

Complexity
    - TC: O(n) -> Another interesting point is that we could actually build a sorted array from the inorder traversal of a binary search tree.
    - SC: O(h) -> O(log n) for a balanced binary tree or O(n) for a skewed tree


Stack Implementation
https://www.youtube.com/watch?v=fAAZixBzIAI&t=1637s

*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/* 유형 1 - 기본 implementation */
// left - parent - right
function inorder(root) {
  // base case
  if (root == null) {
    return;
  }
  // recursive case
  inorder(root.left);
  console.log(root.val); // or any other operation
  inorder(root.right);
}

// parent - left - right
function preorder(root) {
  // base case
  if (root == null) {
    return;
  }
  // recursive case
  console.log(root.val); // or any other operation
  preorder(root.left);
  preorder(root.right);
}

// left - right - parent
// 재귀가 완료된 뒤에 부모를 처리
function postorder(root) {
  // base case
  if (root == null) {
    return;
  }
  // recursive case
  postorder(root.left);
  postorder(root.right);
  console.log(root.val); // or any other operation
}

/* 유형 2 - bst 복원하기 */

// preorder & inorder 배열로 bst 복원하기

// 1. preorder 배열의 첫 번째 요소는 항상 루트 노드이다
// 2. inorder 배열의 루트 요소 왼쪽 값들은 왼쪽 서브 트리,
//    오른쪽에 있는 값들은 오른쪽 서브 트리이다.
// 3. 이런 구조가 재귀적으로 반복

// intuition
// ✅ preorder 순회로 root부터 차례로 만든다.
// ✅ inorder 순회의 값들을 기준으로 서브트리의 경계를 구분한다.
// ✅ root 왼쪽 값들을 먼저 채운 후 오른쪽 값을 채운다.

// dfs
// preorder 값들로 최대한 왼쪽부터 깊이 계속 구축한 후(inorder 기준이기 때문),
// 백트레킹하며 오른쪽 구축

function buildTree(preorder, inorder) {
  let preIdx = 0,
    inIdx = 0;

  function dfs(limit) {
    // base cases
    // 모든 노드를 순회하여 복원 완료
    if (preIdx >= preorder.length) return null;
    // inorder 배열에서 파티션 값에 도달
    if (inorder[inIdx] === limit) {
      inIdx++;
      return null;
    }

    // recursive case
    let root = new TreeNode(preorder[preIdx++]); // preorder 값 순회하며 루트 노드 생성
    root.left = dfs(root.val); // 현재 노드 값을 전달하며 재귀 호출
    root.right = dfs(limit); //
    return root;
  }

  return dfs(Infinity);
}

/* 
preorder = [10, 5, 2, 1, 3, 7, 6, 8, 15, 12, 18]; // cur - left - right
inorder  = [1, 2, 3, 5, 6, 7, 8, 10, 12, 15, 18]; // left - cur - right

             10
         /          \
        5           15
     /    \       /   \
    2     7      12   18
   / \   /  \
  1   3 6   8

*/
