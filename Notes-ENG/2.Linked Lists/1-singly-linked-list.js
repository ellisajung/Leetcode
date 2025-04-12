/* 
Singly Linked Lists

1. Creating a Linked List from scratch

    To create a linked list in a most simply way, we basically just need two steps:
        1) Creating ListNode objects
        2) Chaining those objects

    We can achieve this by making a ListNode class, instantiating list nodes, connecting these nodes by setting next pointer.


2. Traversal: O(n) 

    - To traverse a linked list from beginning to end, we can just make use of a simple *while loop*.
    - The traversal runs in O(n) time where n is the number of nodes in the linked list.
- Circular Linked List
	- If the last node's next pointer is set to, for example, ListNode2 instead of null, it results in a circular linked list. Attempting to iterate through circular linked list will result in infinite loop.


3. Operations

    1) Appending: 
        - An advantage that Linked Lists have over arrays is that inserting a new element can be performed in O(1) time, even if we insert in the middle (just need to reset the connection). We do not have to shift any elements since there is no requirement for the elements to be stored contiguously in memory.
	    - However, this assumes we already have a reference to the node at the desired position we want to insert. If we have to traverse the list to arrive at the insertion point, the operation would take O(n) time.
        - If you're appending a node to the end of the list, you need to not only reset the connection, but also reset tail pointer
	        - tail.next = ListNode4
	        - this.tail = ListNode4

    2) Deleting
        - Deleting a node from a singly linked list will take O(1) since we can accomplish this by updating a single pointer.
        - However, this assumes we already have a reference to the node at the desired position we want to delete. If we have to traverse the list to arrive at the deletion point, the operation would take O(n) time.
        - In most languages, a node that has been disconnected will be cleared automatically via garbage collector. 
        - In other languages like C, you would have to manually free the memory.


*/

/**
 * Singly Linked List Node class
 */
class ListNode {
    /**
     * @param {number} val - Value of the node
     * @param {ListNode} [nextNode=null] - Reference to the next node
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Implementation for Singly Linked List
 */
class LinkedList {
    constructor() {
        /**
         * Initialize the list with a 'dummy' node with a random value of -1,
         * which makes removing a node from the beginning of list easier.
         * @type {ListNode}
         */
        this.head = new ListNode(-1); // setting head pointer to the dummy node
        this.tail = this.head; // setting tail pointer ""
    }
    // head: 리스트의 시작점. `-1`이라는 값이 들어간 **더미 노드**가 리스트의 시작을 담당하며, 실제 값은 `this.head.next`부터 시작. 더미 노드는 삽입 및 삭제 연산을 쉽게 만들어줌.
    // `tail`: 리스트의 끝을 가리키며, 리스트의 끝에 새로운 노드를 추가할 때 사용. 초기에는 더미 노드를 가리키지만, 노드가 추가되면 리스트의 마지막 노드를 가리키도록 업데이트.

    /**
     * Retrieve value at index
     * @param {number} index - Index to retrieve value from
     * @returns {number} Value at index or -1 if index is out of bounds
     */
    get(index) {
        let curr = this.head.next; // 첫번째 노드부터 순회
        let i = 0;
        while (curr) { // traversing
            if (i === index) {
                return curr.val;
            }
            i++;
            curr = curr.next;
        }
        return -1; // Index out of bounds or list is empty
    }

    /**
     * Insert a new node at the head
     * @param {number} val - Value to insert
     */
    insertHead(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if (!newNode.next) { // resetting tail pointer
            // If list was empty before insertion
            this.tail = newNode;
        }
    }

    /**
     * Insert a new node at the tail
     * @param {number} val - Value to insert
     */
    insertTail(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    /**
     * Remove node at index
     * @param {number} index - Index to remove node from
     * @returns {boolean} True if removal was successful, false otherwise
     */
    // this.head (-1) → 10 → 20 → 30
    //                  i
    //                  cur
    remove(index) { // 1
        let i = 0; // 1
        let curr = this.head;
        while (i < index && curr) { // curr가 존재하고, index번째 노드의 직전 노드에 도달할 때까지 루프 실행(index번 실행)
            i++;
            curr = curr.next;
        }

        // Remove the node of curr.next
        if (curr && curr.next) {
            if (curr.next === this.tail) {
                // curr.next = null 처리는 따로 해줄 필요 없음 (조건문 이후에 공통적으로 적용)
                this.tail = curr;
            }
            curr.next = curr.next.next; // curr.next 노드가 tail 노드일 경우, curr.next = null
            return true;
        }
        return false;
    }

    /**
     * Retrieve all values in the list
     * @returns {number[]} An array containing all values in the list
     */
    getValues() {
        let curr = this.head.next; // 첫번째 linked list 노드
        const res = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}