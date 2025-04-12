/* 
BST Traversal - BFS (Breadth Fist Search)

- Iterative traversal (can't be recursive!!)

Queue Implementation (FIFO)
https://www.youtube.com/watch?v=fAAZixBzIAI&t=1637s

*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Queue Implementation 1
// TC: O(n)
// SC: O(n)

// (확인) root 노드가 존재하면
// root 노드를 큐에 push
// 큐가 비어있지 않을 동안,
// 맨앞 요소 cur
// cur print (or any other operation)
// (확인) cur 노드의 left, right child 노드가 존재하면
// 차례대로 큐에 푸시
function bfs(root) {
  let queue = []; // front <- back
  let res = [];

  if (root != null) {
    queue.push(root);
  }

  // first check if the queue is empty
  while (queue.length > 0) {
    let curr = queue.shift(); // 현재 노드 (값 아님)
    // whatever operation you want to perform
    res.push(curr.val);

    // before pushing check if the child exist
    if (curr.left != null) {
      // then add it to the back
      queue.push(curr.left);
    }
    if (curr.right != null) {
      queue.push(curr.right);
    }
  }

  return res;
}

// Queue Implementation 2
// TC: O(n)
// SC: O(n)
function bfs(root) {
  let queue = [];

  if (root != null) {
    queue.push(root);
  }

  let level = 0;

  while (queue.length > 0) {
    let levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      let curr = queue.shift();

      if (curr.left != null) {
        queue.push(curr.left);
      }
      if (curr.right != null) {
        queue.push(curr.right);
      }
    }
    level++;
  }
}
