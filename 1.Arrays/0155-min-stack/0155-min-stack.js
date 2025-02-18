
class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /** 
    * @param {number} val
    * @return {void}
    */
    push(val) {
        this.stack.push(val)
        const min = this.minStack.length === 0 ? val : Math.min(this.minStack[this.minStack.length - 1], val)
        this.minStack.push(min)
    };

    /**
    * @return {void}
    */
    pop() {
        this.stack.pop()
        this.minStack.pop() 
    };

    /**
    * @return {number}
    */
    top() {
       return this.stack[this.stack.length - 1] 
    };

    /**
    * @return {number}
    */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    };

    /** 
    * Your MinStack object will be instantiated and called as such:
    * var obj = new MinStack()
    * obj.push(val)
    * obj.pop()
    * var param_3 = obj.top()
    * var param_4 = obj.getMin()
    */

}