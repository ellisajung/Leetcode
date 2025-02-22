// k의 범위가 크므로
// k를 일일이 순회하지 않고 작게 나누는 것이 핵심
// merge sort 알고리즘 이용

// lists = [[1,4,5],[1,3,4],[2,6],[5,6,7],[3,4]]
//                   /               \
//          [1,4,5] [1,3,4]          [2,6] [5,6,7] [3,4]
//            /        \                /         \
//       [1,4,5]       [1,3,4]      [2,6]      [5,6,7] [3,4]
//                                                  /       \
//                                            [5,6,7]        [3,4]

//           [5 -> 6 -> 7]
//  dummy        \      l1
//        \  [3 -> 4]
//               l2
//                c

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  // Edge cases
  if (!lists || lists.length === 0) {
    // lists가 null이거나 빈 배열일 경우
    return null;
  }

  return divide(lists, 0, lists.length - 1);
}

/**
 * @param {ListNode[]} lists
 * @param {number} l
 * @param {number} r
 * @return {ListNode}
 */
function divide(lists, l, r) {
  if (l > r) {
    // 이 조건은 왜 있어야 되는거임?
    return null;
  }

  if (l === r) {
    return lists[l];
  }

  // let m = Math.floor((l+r)/2)
  let m = Math.floor(l + (r - l) / 2);

  let left = divide(lists, l, m);
  let right = divide(lists, m + 1, r);

  return conquer(left, right);
}

/**
 * @param {ListNode} l1
 * @param  {ListNode} l2
 * @return {ListNode}
 */
function conquer(l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  // 남은 linked-list는 그대로 붙이기
  curr.next = l1 ? l1 : l2;

  return dummy.next;
}
