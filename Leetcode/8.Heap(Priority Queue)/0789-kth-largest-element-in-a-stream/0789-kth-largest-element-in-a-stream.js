/* 풀이 1 - 라이브러리 사용 x */

/**
 * @param {number} k
 * @param {number[]} nums
 */

class KthLargest {
  constructor(k, nums) {
    this.k = k;

    nums.push(nums[0]);
  }

  percolateDown(arr, i) {
    while (2 * i < arr.length) {
      if (
        2 * i + 1 < arr.length &&
        arr[2 * i + 1] < arr[2 * i] &&
        arr[2 * i + 1] < arr[i]
      ) {
        let tmp = arr[i];
        arr[i] = arr[2 * i + 1];
        arr[2 * i + 1] = tmp;

        i = 2 * i + 1;
      } else if (arr[2 * i] < arr[i]) {
        let tmp = arr[i];
        arr[i] = arr[2 * i];
        arr[2 * i] = tmp;

        i = 2 * i;
      } else {
        break;
      }
    }
  }

  heapify(arr) {
    this.heap = arr;
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    if (val <= this.heap[1]) {
      return this.heap[1];
    }

    this.heap[1] = val;
    let i = 1;
    this.heap = percolateDown(this.heap, i);

    return this.heap[1];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// /* 풀이 2 - 라이브러리 */
// /**
//  * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
//  */
// class KthLargest {
//     /**
//      * @param {number} k
//      * @param {number[]} nums
//      */
//     constructor(k, nums) {
//         this.minHeap = new MinPriorityQueue();
//         this.k = k;

//         for (const num of nums) {
//             this.minHeap.enqueue(num);
//         }

//         while (this.minHeap.size() > k) {
//             this.minHeap.dequeue();
//         }
//     }

//     /**
//      * @param {number} val
//      * @return {number}
//      */
//     add(val) {
//         this.minHeap.enqueue(val);
//         if (this.minHeap.size() > this.k) {
//             this.minHeap.dequeue();
//         }
//         return this.minHeap.front();
//     }
// }
