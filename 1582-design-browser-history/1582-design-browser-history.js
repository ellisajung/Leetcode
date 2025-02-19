/* Doubly Linked List */
// TC
    // Initialization: O(1)
    // visit(): O(1)
    // back() & forward(): O(min(n, steps))
// SC: O(m * n)
    // n: number of visited urls
    // m: average lenght of each url

class ListNode {
    constructor(val) {
        this.val = val
        this.prev = null
        this.next = null
    }
}

class BrowserHistory {
    /**
    * @param {string} homepage
    */
    constructor(homepage) {
        this.cur = new ListNode(homepage)
    }

    /** 
    * @param {string} url
    * @return {void}
    */
    visit(url) {
        const node = new ListNode(url)
 
        this.cur.next = node
        node.prev = this.cur
        this.cur = node
    };

    /** 
    * @param {number} steps
    * @return {string}
    */
    back(steps) {
        while(this.cur.prev !== null && steps > 0) {
            this.cur = this.cur.prev
            steps--
        }
        return this.cur.val
    };

    /** 
    * @param {number} steps
    * @return {string}
    */
    forward(steps) {
        while(this.cur.next !== null && steps > 0) {
            this.cur = this.cur.next
            steps--
        }
        return this.cur.val
    };

    /** 
    * Your BrowserHistory object will be instantiated and called as such:
    * var obj = new BrowserHistory(homepage)
    * obj.visit(url)
    * var param_2 = obj.back(steps)
    * var param_3 = obj.forward(steps)
    */
};