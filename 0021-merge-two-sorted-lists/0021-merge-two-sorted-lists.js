/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// approach:
// create dummy node
// iterating both lists
// go comparing & appending the smaller value to the dummy node
// after finishing iterating, append the rest of the remaining list
// return the initial dummy node's next node

// list1 = [1,2,4,5,6,7]
//              l1
// list2 = [1,3,4]
//                l2
// dummy-1-1-2-3-4-
//               c
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode()
    let curr = dummy
    
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }
    // console.log(curr)
    if (list1) {
        curr.next = list1
    } else {
        curr.next = list2
    }

    return dummy.next
};