class MaxHeap {
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

        let max = this.heap[1]
        this.heap[1] = this.heap.pop()
        this.heapifyDown()     
        return max
    }

    heapifyUp() {
        let i = this.heap.length - 1
        while (i > 1 && this.heap[Math.floor(i/2)] < this.heap[i]) {
            let tmp = this.heap[i]
            this.heap[i] = this.heap[Math.floor(i/2)]
            this.heap[Math.floor(i/2)] = tmp

            i = Math.floor(i/2)
        }
    }

    heapifyDown() {
        let i = 1, l=2*i, r=2*i+1
        while (l < this.heap.length) {
            if (r < this.heap.length && 
                this.heap[r] > this.heap[l] && 
                this.heap[r] > this.heap[i]
            ) {
                let tmp = this.heap[i]
                this.heap[i] = this.heap[r]
                this.heap[r] = tmp

                i = r
                l = 2 * i;
                r = 2 * i + 1;
            } else if (this.heap[l] > this.heap[i]) {
                let tmp = this.heap[i]
                this.heap[i] = this.heap[l]
                this.heap[l] = tmp

                i = l
                l = 2 * i;
                r = 2 * i + 1;
            } else {
                break;
            }
        }
    }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = new MaxHeap()

    for (const stone of stones) {
        maxHeap.push(stone)
    }

    while (maxHeap.size() > 1) {
        const stone1 = maxHeap.pop()
        const stone2 = maxHeap.pop()

        if (stone1 !== stone2) maxHeap.push(stone1 - stone2)
    }

    return maxHeap.size() === 0 ? 0 : maxHeap.pop()
};