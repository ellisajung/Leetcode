/* 
Backtracking (& Binary Tree ≠ Binary Search Tree)

Basics
- TC: O(n) - n being the size of the tree
- SC: O(h) - h being the height of the tree
            (= maximum depth of the recursion & the length of the path list)

- DFS & Recursive 성격을 지님
- DFS 함수 내, 재귀 호출에서 반드시 기억해야할 점: 
    - 재귀 호출은 베이스 케이스에 도달할 때까지 실행된다.
    - 재귀 호출의 반환값을 코드에서 활용하는 방식은 구하고자 하는 값에 따라 다름
    - 예를 들어,
        - 구하고자 하는 값이 베이스 케이스의 반환값 자체라면, 재귀 호출을 최종적으로 반환해야

- Brute-force approach 
- (이진 검색 트리의 경우, 정렬이 되어 있으므로 한번 검증할 떄마다 left 또는 right 노드들을 제거 가능) 
- which is to try all possible solutions, 
- and backtrack when we hit a dead-end.

Basic Implementations 
1. 루트 노드에서 리브 노드까지의 경로가 있는지. 경로에는 0이 있으면 안됨.
    -> 첫 true가 반환되면 더 이상 탐색할 필요 없음
2. 루트 노드에서 리브 노드까지의 경로가 있는지, 있으면 경로를 반환.
3. 부분 집합 구하기
*/

// 유형 1
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function canReachLeaf(root) {
  // Base Cases => 현재 탐색 중인 노드!!
  if (root == null || root.val == 0) {
    // 노드가 존재하지 않거나, 값이 0인 경우
    return false;
  }
  if (root.left == null && root.right == null) {
    // leaf 노드일 경우
    // (left나 right 노드가 하나라도 있으면 leaf 노드 아님)
    return true;
  }

  // 재귀 호출
  if (canReachLeaf(root.left)) {
    // DFS 처럼 가능한 깊게 한 방향으로 우선 탐색
    return true;
  }
  if (canReachLeaf(root.right)) {
    return true;
  }

  return false;
  // 위 두가지가 true 아닌 경우 한번에 처리
  // (각각에 else {return false}로 처리해준 것과 같음)
}

const binaryTree = [1, 2, 0, 0, 3, null, null];
//     1
//    / \
//   2  0
//  / \
// 0  3

// 유형 2
function leafPath(root, path) {
  // path(스택)를 파람으로 전달
  if (root == null || root.val == 0) {
    return false;
  }
  path.push(root.val);

  if (root.left == null && root.right == null) {
    return true;
  }
  if (leafPath(root.left, path)) {
    return true;
  }
  if (leafPath(root.right, path)) {
    return true;
  }
  //   path.remove(path.size() - 1);
  path.pop();
  return false;
}

/* 유형 3 */
function subsets(nums) {
  const res = [];
  const subset = [];

  function dfs(i) {
    if (i >= nums.length) {
      res.push([...subset]); // 현재 subset을 복사해서 결과에 추가
      return;
    }

    // 1️⃣ 현재 숫자를 포함하는 경우
    subset.push(nums[i]);
    dfs(i + 1); // 다음 숫자로 이동

    // 2️⃣ 현재 숫자를 포함하지 않는 경우
    subset.pop(); // 이전 push를 되돌림
    dfs(i + 1);
  }

  dfs(0);

  return res;
}

const nums = [1, 2, 3];

/* 
Decision Tree
                       []
0                /                 \
             [1]                    []
1           /     \             /        \
        [1,2]       [1]        [2]       []     
2      /    \      /    \     /   \     /   \ 
   [1,2,3] [1,2] [1,3] [1] [2,3] [2]  [3]   []  

*/
