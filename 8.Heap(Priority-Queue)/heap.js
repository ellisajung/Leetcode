/* 
Heap / Priority Queue

Queue follows FIFO order, while 
Priority Queue orders based on some priority value(min or max).

Queues are generally implemented with linked-list, while 
Priority Queues are implemented with heap(tree-based data structure)/, which is implemented with array.

Types: 
    1. Min Heap
        - Have the smallest value at the root node.
        - Every node in the left and right sub-tree should have values greater than or equal to the root.
    2. Max Heap
        - Have the largest value at the root node.
        - Every node in the left and right sub-tree should have values smaller than or equal to the root.

Properties:
For a binary tree to qualify as a heap, it must satisfy the following properties.
    1. Structure property
        - Complete binary tree
        - Every single level of the tree is filled,
        - except the lowest level, which are filled contiguously from left to right.
    2. Order property (index)
        - Left child: 2 * i
        - Right child: 2 * i + 1
        - Parent: Math.floor(i / 2)
        - (참고) non-leaf node 개수: Math.floor(n/2)
                                  // leaf 노드의 개수는 나머지 노드의 개수를 다 합친 것보다 항상 크다.

Operations: 
  * - Get min/max: O(1) => reason why we use heap
    - Push: O(logn)
    - Pop: O(logn)
    - Heapify: O(n) => 실제로는 아래 구현한 것처럼 heapify할 일이 거의 없고,
                       heap 클래스 구현 후, 솔루션 함수에서 파람으로 받는
                       배열을 순회하며 값을 하나씩 push하면 자동으로 heapify.
                       따라서 문제 풀 때 constructor(빈배열로 초기화), push, pop, heapifyUp, heapifyDown 이렇게만 구현
                       
    
    (참고) O(n)인 이유:
      - leaf node의 개수: n/2
      - leaf node를 percolate down 해야되는 횟수: 0
      - 그 전 레별도 이런식으로 생각하면 ...

      - (0*n/2) + (1*n/4) + (2*n/8) + (3*n/16) + ... (h*1)
        = n/4 ∑ (k / 2^(k-1))


Implementation:
    - 배열로 구현되며, order property 규칙 사용을 위해
    - 0 인덱스의 값은 0으로 초기화한다.
    - 따라서 Min / Max 값으로의 접근은 heap(1)을 통해 할 수 있다.

    - 연산은 structure property를 유지하며 order property를 정립해나가는 방식으로 진행
    - 이때 percolate up 또는 down을 함
    - 이때 주의할 점은 up, down은 어디서 시작하느냐가 아니라 노드가 어떤 방향으로 이동하느냐임
    - percolate up: 값(val)이 부모로 올라가며 위치를 찾음 (예: push)
    - percolate down: 부모가 내려가며 올바른 위치를 찾음 (예: pop, heapify)

*/

// Implementation
class MinHeap {
  // Because of its properties, heaps are implemented with arrays.
  constructor() {
    this.heap = new Array();
    this.heap.push(0); // dummy element of 0, in index 0
  }

  // Inserting
  // TC: O(logn) or O(H)
  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;

    // Percolate up
    // structure property 유지하며
    // order property 만족할 때까지

    // i가 root index보다 크고,
    // val이 부모 노드보다 작을 경우
    while (i > 1 && val < this.heap[Math.floor(i / 2)]) {
      // swiping algorithm
      let tmp = val; // 또는 this.heap[i]
      this.heap[i] = this.heap[Math.floor(i / 2)];
      this.heap[Math.floor(i / 2)] = tmp;

      i = Math.floor(i / 2);
    }
  }

  // Popping
  // min 노드는 반환하고 나머지는 재정렬
  // TC: O(logn) or O(H)

  // priority queue이기 때문에 min/max 값이 pop()
  pop() {
    // 빈 힙인 경우
    if (this.heap.length == 1) {
      // Normally we would throw an exception if heap is empty.
      return -1;
    }

    // 노드가 root 노드 1개인 경우
    if (this.heap.length == 2) {
      return this.heap.pop();
    }

    // 그 외

    let res = this.heap[1];
    // Move last value to root
    this.heap[1] = this.heap.pop();

    // Percolate down
    // 마찬가지로 structure property를 유지하며
    // order property를 만족할 때가지 반복하기 위해
    // 루트의 자식 노드로 대체하는 대신,
    // leaf 노드에 해당하는 마지막 노드로 대체
    let i = 1;
    // 적어도 left child가 있는 동안 (= 자식이 있는 동안) 반복
    while (2 * i < this.heap.length) {
      // right child가 있고,
      // right child < left child 이고,
      // current node > right child 이면
      if (
        2 * i + 1 < heap.length &&
        this.heap[2 * i + 1] < this.heap[2 * i] &&
        this.heap[i] > this.heap[2 * i + 1]
      ) {
        // Swap right child (Swapping algorithm)
        let tmp = this.heap[i];
        this.heap[i] = this.heap[2 * i + 1];
        this.heap[2 * i + 1] = tmp;
        // update index
        i = 2 * i + 1;

        // (right child 없는 경우)
        // current node > left child 이면
      } else if (this.heap[i] > this.heap[2 * i]) {
        // Swap left child (Swapping algorithm)
        let tmp = this.heap[i];
        this.heap[i] = this.heap[2 * i];
        this.heap[2 * i] = tmp;
        // update index
        i = 2 * i;

        // found a proper position
      } else {
        break;
      }
    }
    return res; // 맨 처음 할당한 min 요소
  }

  // Heapify (Take the array and generate a heap)
  // TC: O(n)
  heapify(arr) {
    // 0-th position is moved to the end
    // (어차피 heapify할거라서 순서 상관 없음)
    arr.push(arr[0]);

    this.heap = arr;
    let cur = Math.floor((this.heap.length - 1) / 2); // non-leaf node

    // index가 1일 때까지
    while (cur > 0) {
      // Percolate Down

      let i = cur; // 마지막 비리프 노드에서 시작

      // Heap 클래스 구현할 때 여기부터 helper function으로 빼서
      // pop이랑 heapify에서 재사용 가능

      // 적어도 left child가 있는 동안 (= 자식이 있는 동안)
      while (2 * i < this.heap.length) {
        // right child가 있고,
        // right child < left child 이고,
        // current node > right child 이면
        if (
          2 * i + 1 < this.heap.length &&
          this.heap[2 * i + 1] < this.heap[2 * i] &&
          this.heap[i] > this.heap[2 * i + 1]
        ) {
          // Swap right child
          let tmp = this.heap[i];
          this.heap[i] = this.heap[2 * i + 1];
          this.heap[2 * i + 1] = tmp;
          i = 2 * i + 1;

          // curr val > left child
        } else if (this.heap[i] > this.heap[2 * i]) {
          // Swap left child
          let tmp = this.heap[i];
          this.heap[i] = this.heap[2 * i];
          this.heap[2 * i] = tmp;
          i = 2 * i;

          // found a proper position
        } else {
          break;
        }
        // 여기까지 (재사용)
      }
      cur--;
    }
    return;
  }
}

// Implementation (재사용 버전)
class MinHeap {
  // Because of its properties, heaps are implemented with arrays.
  constructor() {
    this.heap = new Array();
    this.heap.push(0); // dummy element of 0, in index 0
  }

  // Inserting
  // TC: O(logn) or O(H)
  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;

    // Percolate up
    // structure property 유지하며
    // order property 만족할 때까지

    // i가 root index보다 크고,
    // val이 부모 노드보다 작을 경우
    while (i > 1 && val < this.heap[Math.floor(i / 2)]) {
      // swiping algorithm
      let tmp = val; // 또는 this.heap[i]
      this.heap[i] = this.heap[Math.floor(i / 2)];
      this.heap[Math.floor(i / 2)] = tmp;

      i = Math.floor(i / 2);
    }
  }

  // Helper function
  helper(arr, i) {
    // 적어도 left child가 있는 동안 (= 자식 노드가 있는 동안)
    while (2 * i < arr.length) {
      // right child가 있고,
      // right child < left child 이고,
      // curr > right child 이면
      if (
        2 * i + 1 < arr.length &&
        arr[2 * i + 1] < arr[2 * i] &&
        arr[i] > arr[2 * i + 1]
      ) {
        // swapping
        let tmp = arr[i];
        arr[i] = arr[2 * i + 1];
        arr[2 * i + 1] = tmp;

        i = 2 * i + 1;
      } else if (arr[i] > arr[2 * i]) {
        let tmp = arr[i];
        arr[i] = arr[2 * i];
        arr[2 * i] = tmp;

        i = 2 * i;
      } else {
        break;
      }
    }
  }

  // Popping
  // min 노드는 반환하고 나머지는 재정렬
  // TC: O(logn) or O(H)

  // priority queue이기 때문에 min/max 값이 pop()
  pop() {
    // 빈 힙인 경우
    if (this.heap.length == 1) {
      // Normally we would throw an exception if heap is empty.
      return -1;
    }

    // 노드가 root 노드 1개인 경우
    if (this.heap.length == 2) {
      return this.heap.pop();
    }

    // 그 외

    let res = this.heap[1];
    // Move last value to root
    this.heap[1] = this.heap.pop();

    // Percolate down
    // 마찬가지로 structure property를 유지하며
    // order property를 만족할 때가지 반복하기 위해
    // 루트의 자식 노드로 대체하는 대신,
    // leaf 노드에 해당하는 마지막 노드로 대체
    let i = 1;

    this.helper(this.heap, i);

    return res; // 맨 처음 할당한 min 요소
  }

  // Heapify (Take the array and generate a heap)
  // TC: O(n)
  heapify(arr) {
    // 0-th position is moved to the end
    // (어차피 heapify할거라서 순서 상관 없음)
    arr.push(arr[0]);

    this.heap = arr;
    let cur = Math.floor((this.heap.length - 1) / 2); // non-leaf node

    // index가 1일 때까지
    while (cur > 0) {
      // Percolate Down

      let i = cur; // 마지막 비리프 노드에서 시작

      this.helper(this.heap, i);

      cur--;
    }
    return;
  }
}

// Implementation (주석 없는 버전)
class MinHeap {
  constructor() {
    this.heap = new Array();
    this.heap.push(0); // dummy element of 0, in index 0
  }

  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;

    // Percolate up
    while (i > 1 && val < this.heap[Math.floor(i / 2)]) {
      let tmp = val; // 또는 this.heap[i]
      this.heap[i] = this.heap[Math.floor(i / 2)];
      this.heap[Math.floor(i / 2)] = tmp;

      i = Math.floor(i / 2);
    }
  }

  percolateDown(arr, i) {
    while (2 * i < arr.length) {
      if (
        2 * i + 1 < arr.length &&
        arr[2 * i + 1] < arr[2 * i] &&
        arr[i] > arr[2 * i + 1]
      ) {
        let tmp = arr[i];
        arr[i] = arr[2 * i + 1];
        arr[2 * i + 1] = tmp;

        i = 2 * i + 1;
      } else if (arr[i] > arr[2 * i]) {
        let tmp = arr[i];
        arr[i] = arr[2 * i];
        arr[2 * i] = tmp;

        i = 2 * i;
      } else {
        break;
      }
    }
  }

  pop() {
    if (this.heap.length == 1) {
      return -1;
    }

    if (this.heap.length == 2) {
      return this.heap.pop();
    }

    let res = this.heap[1];
    this.heap[1] = this.heap.pop();

    let i = 1;
    this.percolateDown(this.heap, i);

    return res; // 맨 처음 할당한 min 요소
  }

  heapify(arr) {
    arr.push(arr[0]);

    this.heap = arr;
    let cur = Math.floor((this.heap.length - 1) / 2);

    while (cur > 0) {
      let i = cur;
      this.percolateDown(this.heap, i);

      cur--;
    }
    return;
  }
}
