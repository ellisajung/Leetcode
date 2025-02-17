/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* 풀이 1 - Two pointers & Iteration (Optimal) */
// TC: O(n)
// SC: O(1) - since we're not using any extra data structure

// head = [1,2,3,4,5]
//                 p c n
var reverseList = function (head) {
  let [prev, curr, next] = [null, head, null];
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

/* 풀이 2 - Recursion */
// TC: O(n)
// SC: O(n)

// sub-problem:
// reverse the rest of the linked list except the current node
var reverseList = function (head) {
  if (!head) {
    return null;
  }

  let newHead = head;
  if (head.next) {
    newHead = reverseList(head.next);
    head.next.next = head;
  }
  head.next = null;

  return newHead;
};
