# Insertion Sort

Insertion sort is one of many sorting algorithms used to sort data in different data structures.

Each sorting algorithm has its own advantages and disadvantages. Insertion sort is no exception. It is a simple algorithm that is easy to implement and understand. However, it is not the most efficient sorting algorithm when it comes to large data sets.

---

## Concept

Given the array `[2,3,4,1,6]`, our goal is to sort the array so that it looks like `[1,2,3,4,6]`.

Insertion sort accomplishes this by sorting portions of the array at a time.

Consider this: if we had an array of size 11, that would already be sorted because there is no other element to compare it to.

As such, we assume that the first element is sorted because we treat it as its own subarray.

The next subarray will be of size 22 starting from the beginning. In this example that is `[2,3,...]`. To sort only these two elements we need to compare them.

For an array of size 22, this is trivial. However, when we get to the full array of size 55, there is no way to keep track of where each element is without using pointers. So, let's take two pointers, `i` and `j`.

1. The `i` pointer points at the element we are currently inserting into the sorted portion of the array.
2. The `j` pointer starts off one index to the left of `i`.
3. Our goal is to find the position that `arr[i]` should be inserted into the sorted portion of the array.
4. We continue swapping it with `arr[j]` until we find the correct position.
5. After each swap we shift `j` to the left by `1`
6. We stop once the element is greater than or equal to the element to its left.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        while (j >= 0 && arr[j+1] < arr[j]) {
            let tmp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = tmp;
            j--;
        }
    }
    return arr;
}
```

Copy

The steps look like the following.

![alt text](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/f6edc4d8-ebbe-4276-a4d6-b7272268dd00/sharpen=1)

You may be wondering if insertion sort will work on different data types apart from the integers? The answer is yes. As long as there is a way to compare two values, sorting algorithms generally work on any data type.

> The terms above such as subarray and subproblem may remind you of the concept of recursion, which we just learned. Insertion sort happens to be easier to implement iteratively, but we will also learn some sorting algorithms that are implemented recursively.

---

## Stability

Stability in a sorting algorithm refers to the relative order of the elements after the sorting is done. Take `[7,3,7]` for example. There are two 7s, one at the `0th` index and the other at the `2nd` index. We know that the relative order of these two 7s will stay the same since 3 will swap with the 7 at the `0th` index and then the while loop will never be implemented.

This is called a **stable** sorting algorithm. Insertion sort is stable, meaning that it is guaranteed that the relative order will remain the same. Not all sorting algorithms are stable, as we will see later on.

---

## Time and Space Complexity

### Time

If the input array is already sorted you may notice that the inner loop will never execute. This is the best case scenario for insertion sort where the time complexity is O(n)O(n).

In the worst case scenario, the time complexity is O(n2)O(n2). This is because the inner loop will execute nn times for each element in the array.

Can you guess what kind of input would lead to the worst case scenario?

_Click here for the answer_

  

Note that even if the array is in random order, the time complexity is still O(n2)O(n2) in the average case.

### Space

Insertion sort is an in-place sorting algorithm. This means that the space complexity is O(1)O(1) since no additional data structures are used.