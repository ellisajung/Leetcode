/* 
Binary Search Trees (BST)
    - Every node in the left subtree is smaller than the root,
      and every node in the right subtree is greater than the root.
    - This property applies recursively til the leaf node.

Basics
    - TC: O(logn) (technically, O(n) or O(h))

Requirements
    - Sorted
    - Roughly balanced

Why BST? (BS vs BST)
    - Inserting & Deleting
        - BS (sorted array): O(n)
        - BST: O(logn)

*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/* 유형 1 */
// bst에 target과 일치하는 값이 있는지 탐색
// 있으면 true 반환, 없으면 false 반환
function search(root, target) {
  // Base case
  // 왼쪽 또는 오른쪽으로만 탐색하므로
  // leaf 노드인지 확인할 때 둘 다 확인할 필요 x
  if (root == null) {
    return false;
  }

  // Recursive case
  if (target > root.val) {
    return search(root.right, target);
  } else if (target < root.val) {
    return search(root.left, target);
  } else {
    return true;
    // 이 값이 버블 업되어
    // 최종적으로 가장 먼저 호출한 root가 true를 반환
  }
}

/* 유형 2 */
// bst에서 val과 일치하는 노드 있으면
// 해당하는 노드를 root으로 하는 subtree 반환
// 없으면 null 반환
var searchBST = function (root, val) {
  // base case
  if (root === null) {
    return null;
  }

  // recursive case
  if (val > root.val) {
    return searchBST(root.right, val);
    // return을 해야 아래에서 반환한 root 값을 최종적으로 반환할 수 있음
    // 그렇지 않으면 root를 값을 반환한 함수에서만 반환하고
    // 콜 스택의 나머지 함수는 반환 값 없이 실행만 되고 끝남
    // 결과적으로 가장 처음 호출된 searchBST는 undefined을 반환
  }

  if (val < root.val) {
    return searchBST(root.left, val);
    // return을 해야 아래에서 반환한 root 값을 최종적으로 반환할 수 있음
    // 그렇지 않으면 root를 값을 반환한 함수에서만 반환하고
    // 콜 스택의 나머지 함수는 반환 값 없이 실행만 되고 끝남
    // 결과적으로 가장 처음 호출된 searchBST는 undefined을 반환
  }

  if (val === root.val) {
    return root;
  }
};

/* 
searchBST(4, 2)

root = [4,2,7,1,3], val = 2

       4
      / \
     2   7
    / \
   1   3



*/

/* 기본 연산 - 삽입, 삭제, 최솟값 구하기 */

/*  
삽입

최대한 balanced tree가 되게 하려면 root에 삽입하는 것이 이상적이나(이를 위한 더 advanced된 알고리즘 존재),
leaf node에 삽입하는 것이 가장 간단

Input: root = [4,2,7,1,3], val = 5

        4
      /  \
     2    7
   /  \
  1   3

*/

// Insert a new node (as a leaf node) and return the root of the BST.
function insert(root, val) {
  // Base case
  // reaching the leaf node
  if (root == null) {
    return new TreeNode(val); // creating a new node
  }

  // 둘 중에 하나만 호출
  if (val > root.val) {
    root.right = insert(root.right, val); // return 값을 할당함으로써 node를 connect
  } else if (val < root.val) {
    root.left = insert(root.left, val); // return 값을 할당함으로써 node를 connect
  }
  return root; // 모든 재귀호출이 끝나면 re-connected된 트리 반환
}

/* 
삭제

Remove a node and return the root of the BST.

노드 삭제할 경우:
    - 해당 노드를 root로 하는
    - left subtree의 최댓값을 가지는 노드 또는 
    - right subtree의 최솟값을 가지는 노드로 대체 
        - 이때, 대체하는 노드는 leaf 노드이거나
        - 적어도 left child는 없는 노드가 된다

2가지 Case:
    1. 삭제하려는 노드가 0 또는 1개의 자식노드를 가질 때
        - 재귀적으로 호출할 필요 없이 subtree 그대로 이어붙이면 됨
    2. 삭제하려는 노드가 2개의 자식노드를 가질 때

흐름:
    1. 삭제하려는 노드 탐색
    2. 삭제하려는 노드의 subtree 탐색
    3. 대체할 노드 삭제
    4. 대체할 노드 재귀적으로 반환
    5. 삭제하려는 노드 삭제 & 대체


Input: root = [4,2,7,1,3,6,8], val = 7

        4
      /   \
     2     7
   /  \   /  \
  1   3  6   8

 */
function remove(root, val) {
  // Base case
  if (root == null) {
    return null;
  }

  // Recursive case
  // 삭제하려는 노드 탐색
  // 노드를 찾아서 else 케이스가 실행되고 나면
  // 재귀적으로 반환되며 아래 두 케이스 중 하나로 회귀
  if (val > root.val) {
    root.right = remove(root.right, val);
  } else if (val < root.val) {
    root.left = remove(root.left, val);
  } else {
    // 삭제하려는 노드가 0 또는 1개의 자식노드를 가질 때
    if (root.left == null) {
      return root.right; // right subtree 반환
    } else if (root.right == null) {
      return root.left; // left subtree 반환
    } else {
      // 삭제하려는 노드가 2개의 자식노드를 가질 때
      let minNode = minValueNode(root.right); // 대체 노드 찾음
      root.val = minNode.val; // target 노드 대체
      // 대체 노드 삭제
      // 이때 재귀적으로 호출하지만 대체 노드는
      // leaf 노드이거나, right child (또는 subtree)가 있을 것이므로
      // 바로 베이스 케이스 도달
      root.right = remove(root.right, minNode.val);
    }
  }
  return root; // 재귀적으로 반환이 모두 끝나면 삭제 및 reconnected된 root 반환
}

// 최솟값 구하기
// Return the minimum value node of the BST.
function minValueNode(root) {
  let curr = root;
  while (curr !== null && curr.left !== null) {
    curr = curr.left;
  }
  return curr;
}
