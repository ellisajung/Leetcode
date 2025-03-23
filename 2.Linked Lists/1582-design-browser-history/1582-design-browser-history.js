/* Dynamic Array */
// TC
    // Initialization: O(1)
    // visit(): O(1)
    // back() & forward(): O(1)
// SC: O(m * n)
    // n: number of visited urls
    // m: average lenght of each url
class BrowserHistory {
    /**
    * @param {string} homepage
    */
    constructor(homepage) {
        this.history = [homepage]
        this.cur = 0
        this.len = 1
    }

    /** 
    * @param {string} url
    * @return {void}
    */
    visit(url) {
        this.cur++
        if (this.cur === this.history.length) {
            this.history.push(url)
            this.len++
        } else {
            this.history[this.cur] = url
            this.len = this.cur + 1
        }
    };

    /** 
    * @param {number} steps
    * @return {string}
    */
    back(steps) {
        this.cur = Math.max(this.cur - steps, 0)
        return this.history[this.cur]
    };

    /** 
    * @param {number} steps
    * @return {string}
    */
    forward(steps) {
        this.cur = Math.min(this.len - 1, this.cur + steps)
        return this.history[this.cur]
    };

    /** 
    * Your BrowserHistory object will be instantiated and called as such:
    * var obj = new BrowserHistory(homepage)
    * obj.visit(url)
    * var param_2 = obj.back(steps)
    * var param_3 = obj.forward(steps)
    */
};