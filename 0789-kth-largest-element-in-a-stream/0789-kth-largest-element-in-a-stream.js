class MinHeap {
    constructor() {
        this.heap = [0]
    }

    size() {
        return this.heap.length - 1
    }

    push(val) {
        this.heap.push(val)
        this.heapifyUp()
    }

    pop() {
        if (this.heap.length === 1) return -1
        if (this.heap.length === 2) return this.heap.pop()

        let min = this.heap[1]
        this.heap[1] = this.heap.pop()
        this.heapifyDown()

        return min

    }

    heapifyUp() {
        let i = this.heap.length - 1
        while (i > 1 && this.heap[Math.floor(i/2)] > this.heap[i]) {
            [this.heap[i], this.heap[Math.floor(i/2)]] = [this.heap[Math.floor(i/2)], this.heap[i]] // 오른쪽 값들은 할당되기 전에 평가됨
            i = Math.floor(i/2)
        }
    }

    heapifyDown() {
        let i = 1, l = 2*i, r = 2*i+1
        while (l < this.heap.length) {
            if (r < this.heap.length
            && this.heap[r] < this.heap[l]
            && this.heap[r] < this.heap[i]
            ) {
                [this.heap[i], this.heap[r]] = [this.heap[r], this.heap[i]] // 오른쪽 값들은 할당되기 전에 평가됨
                i = r
                l = 2*i
                r = 2*i+1
            } else if (this.heap[l] < this.heap[i]) {
                [this.heap[i], this.heap[l]] = [this.heap[l], this.heap[i]] // 오른쪽 값들은 할당되기 전에 평가됨
                i = l
                l = 2*i
                r = 2*i+1
            } else {
                break;
            }
        }
    }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
    constructor(k, nums) {
        this.k = k
        this.heap = new MinHeap()
        
        for (const num of nums) {
            this.heap.push(num)
        }

        while (this.heap.size() > this.k) {
            this.heap.pop()
        }
    }

    add(val) {    
        if (this.heap.size() < this.k) {
            this.heap.push(val);
        } else if (val > this.heap.heap[1]) { 
            this.heap.pop();
            this.heap.push(val);
        }

        return this.heap.heap[1];
    }


};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */