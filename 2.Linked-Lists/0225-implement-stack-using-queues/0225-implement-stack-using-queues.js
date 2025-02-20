/* 풀이 1 */
class MyStack {
  constructor() {
    // bottom [] top
    this.q = [];
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.q.push(x);
  }

  /**
   * @return {number}
   */
  pop() {
    for (let i = 0; i < this.q.length - 1; i++) {
      this.q.push(this.q.shift());
    }

    return this.q.shift();
  }

  /**
   * @return {number}
   */
  top() {
    return this.q[this.q.length - 1];
  }

  /**
   * @return {boolean}
   */
  empty() {
    return this.q.length === 0;
  }

  /**
   * Your MyStack object will be instantiated and called as such:
   * var obj = new MyStack()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.empty()
   */
}

/* 풀이 2 */
class MyStack {
  constructor() {
    this.q = [];
  }

  push(x) {
    this.q.push(x);
    for (let i = 0; i < this.q.length - 1; i++) {
      this.q.push(this.q.shift());
    }
  }

  pop() {
    return this.q.shift();
  }

  top() {
    return this.q[0];
  }

  empty() {
    return this.q.length === 0;
  }
}
