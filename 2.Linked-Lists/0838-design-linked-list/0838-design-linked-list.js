class ListNode {
    constructor(val) {
        this.val = val
        this.prev = null
        this.next = null
    }
}

class MyLinkedList {
    // creating dummy nodes
    constructor() {
        this.left = new ListNode(0)
        this.right = new ListNode(0)
        this.left.next = this.right
        this.right.prev = this.left
    }

    /** 
    * @param {number} index
    * @return {number}
    */
    get(index) {
        let cur = this.left.next

        // cur이 right가 아니고, 인덱스가 0일때가지 반복
        while (cur && index > 0) {
            cur = cur.next
            index--
        }
        // 범위를 벗어나는 잘못된 인덱스를 입력한 경우 방지
        if (cur !== this.right && cur && index === 0) {
            return cur.val
        }

        return -1
    };

    /** 
    * @param {number} val
    * @return {void}
    */
    addAtHead(val) {
        const node = new ListNode(val)
        const left = this.left
        const head = this.left.next

        left.next = node
        node.prev = left
        node.next = head
        head.prev = node        
    };

    /** 
    * @param {number} val
    * @return {void}
    */
    addAtTail(val) {
        const node = new ListNode(val)
        const right = this.right
        const tail = this.right.prev

        right.prev = node
        node.next = right
        node.prev = tail
        tail.next = node
    };

    /** 
    * @param {number} index 
    * @param {number} val
    * @return {void}
    */
    addAtIndex(index, val) {
        let node = new ListNode(val)
        let cur = this.left.next

        while (cur && index > 0) {
            cur = cur.next
            index--
        }

        // 이 경우는 cur === this.right 이어도 상관없음
        // (어차피 해당하는 index의 prev에 삽입하기 때문)
        if (cur && index === 0) {
            let prev = cur.prev
            
            prev.next = node
            node.prev = prev
            node.next = cur
            cur.prev = node
        }
    };

    /** 
    * @param {number} index
    * @return {void}
    */
    deleteAtIndex(index) {
        let cur = this.left.next

        while (cur && index > 0) {
            cur = cur.next
            index--
        }

        if (cur !== this.right && cur && index === 0) {
            let prev = cur.prev
            let next = cur.next
            
            prev.next = next
            next.prev = prev
        }
    };

    /** 
    * Your MyLinkedList object will be instantiated and called as such:
    * var obj = new MyLinkedList()
    * var param_1 = obj.get(index)
    * obj.addAtHead(val)
    * obj.addAtTail(val)
    * obj.addAtIndex(index,val)
    * obj.deleteAtIndex(index)
    */
};