# Merge Sort

Merge sort is an extremely common sorting algorithm that is used by many programming languages as apart of their standard library.

The concept behind it is very simple. Keep splitting the array into halves until the subarrays hit a size of one. Then recursively sort the subarrays by merging two subarrays at a time. The final array will be fully sorted.

This is a technique that is known as **divide and conquer**. We divide the problem into smaller subproblems, solve them and then combine the solutions to get the final answer.

> This is two-branch recursion, similar to the fibonacci sequence.

## Implementation

Let's take an array of size 55 as an example, `[3,2,4,1,6]`. We want to sort it in an increasing, or non-decreasing order if we had duplicates. We will be splitting the array like the following.

![alt text](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/55728d04-816e-4176-985c-e82da4112b00/sharpen=1)

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
function mergeSort(arr, l,  r) {
    if (l < r) {
        // Find the middle point of arr
        let m = Math.floor((l + r) / 2);

        mergeSort(arr, l, m);   // sort left half
        mergeSort(arr, m+1, r); // sort right half
        merge(arr, l, m, r);    // merge sorted halfs
    }
    return arr;
}
```

Copy

1. We have a base case where if the length of the array is less than or equal to 11, we return the array because it is already sorted.
2. Otherwise we calculate the middle index of the array.
3. We recursively call `mergeSort()` on the left half of the array. We do this by passing pointers `s` and `m` to the function, which in this case represent the start and end of the left half of the array.
4. We recursively call `mergeSort()` on the right half of the array. We do this by passing pointers `m + 1` and `e` to the function, which in this case represent the start and end of the right half of the array.
5. We merge the two sorted halves by calling the `merge()` function, which is discussed more below.

## Visualization and Pseudocode

### The `mergeSort()` recursive call

As we learned with two branch recursion, we solve both the branches and 'piece' back together the solutions to the subproblems to arrive at the ultimate solution. Once we have the subarray `[3,2]` sorted to `[2,3]` - this is the `mergeSort(arr, s, m)` part. Now, we can move on to sorting the `[4]`, which corresponds to the `mergeSort(arr, m + 1, e)`.

It is important to note the sequence in which the calls are executed. The `merge()` call will not be executed until both the recursive `mergeSort()` calls have returned for the current subarray. The first visual below shows sorting and merging the left half. The second visual shows sorting and merging the second half to get the ultimate sorted array.

![alt text](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/23d6fbdf-2fe5-4ff6-2c55-473b789a9600/sharpen=1)

![alt text](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/d497f50f-b72f-4038-06e3-fbbf60ac1000/sharpen=1)

#### The `merge()` function and three pointers

As observed in the visual above, we have three pointers, `k`, `j` and `i`.

- `k` keeps track of where the next element in `arr` needs to be placed.
- `i` points to the element in the `leftSubarray` that is currently being compared to the `j` element in the `rightSubarray`.
- One of `i` or `j` will increment depending on which element in smaller.
- `k` will increment regardless because `arr` will have an element placed inside of it regardless of which one of `i` or `j` increments.

This is demonstrated in the `merge()` function pseudocode below.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l,  m, r) { 
    
    // Find lengths of two subarrays to be merged
    let length1 = m - l + 1;
    let length2 = r - m;

    // Create temp arrays 
    let L = new Array(length1);
    let R = new Array(length2);

    // Copy the sorted left & right halfs to temp arrays
    for (let i = 0; i < length1; i++) {
        L[i] = arr[l + i];
    }
    
    for (let j = 0; j < length2; j++) {
        R[j] = arr[m + 1 + j];
    }
    
    // initial indexes of left and right sub-arrays
    let i = 0; // index for left
    let j = 0; // index for right
    let k = l; // Initial index of merged subarray array

    // Merge the two sorted halfs leto the original array
    while (i < length1 && j < length2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    // One of the halfs will have elements remaining
    while (i < length1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < length2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
```

Copy

> Recall that even though the visual only demonstrates the merging of the ultimate subarray, recursion tells us that the merge happens on every level after the arrays are sorted because we would never have gotten to the ultimate array if the subarrays had not been sorted and merged.

> The piece of code used for `i` pointer and `j` pointer is actually referred to as the two pointer technique and is extremely common. In this case it is used to combine two arrays in O(n+m)O(n+m) time, where nn and mm are the lengths of the two arrays.

---

## Time and Space Complexity

### Time

Merge Sort runs in O(n log n)O(n log n). Why? Let's do some analysis.

First let's determine how many levels will be in the recursion tree.

![alt text](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/600da4fb-21e7-4559-af19-afb78ec85100/sharpen=1)

If nn is the length of our array at any given level, our subarrays in the next level have a length n/2n/2.

From our example above, we go from n=4n=4 to n=2n=2 to n=1n=1 which is the base case. The question here is how many times can we divide nn by 22 until we hit the base case. This would look like n/2x=1n/2x=1 where xx is the number of times we need to divide nn by two until we get to one.

n/2x=1n/2x=1

> Isolate nn by multiplying both sides by 2x2x

n=2xn=2x

> To solve for xx, take loglog of both sides

log n=log2xlog n=log2x

> According to loglog rules, we can simplify this to:

log n=x log 2log n=x log 2

> log 2log 2 is basically asking 22 to the power of what is equal to 22 i.e . 2?=22?=2, which is just 11

log n=xlog n=x

Thus, the final answer is **x=log nx=log n**.

This means we have log nlog n levels in our recursion tree. But what is the cost of each level?

This is dependent on the `merge()` function. Merge will take nn steps because at any level of the tree, we have nn elements to compare and sort, where nn is the length of the original array.

To get the final time complexity we multiply the number of levels in the recursion tree by the cost of each level.

This results in a O(n log n)O(n log n) time complexity.

### Space

The height of the recursion tree is log nlog n and at each level. At any given level, we have nn elements to sort, which we will allocate temporary arrays for in the `merge()` function.

To get the total space complexity we sum both terms and get O(n +log n)O(n +log n), which simplifies to O(n)O(n).

The reason we sum rather than multiply is because not all of the temporary arrays will be allocated at the same time, but rather one at a time.

---

## Stability

Merge Sort proves to be a **stable** algorithm because if we have a pair of duplicates, say, 77, the 77 in the left subarray will always end up in the merged array first followed by the 77 in the right subarray. This is because when we compare the `ith` element in the left subarray to the `jth` element in the right subarray for equality, we pick the one in the left subarray, maintaining the relative order. Recall the following pseudocode from the `merge()` subroutine.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
if (leftSubarray[i] <= rightSubarray[j]) {
    arr[k] = leftSubarray[i];
    i += 1;
}
```

Copy

---

## Closing Notes

So how does merge sort stack up with insertion sort? In the worst case scenario, insertion sort runs in O(n2)O(n2) with merge sort running in O(n log n)O(n log n) in the worst, average and best case scenarios, making merge sort superior.

The only time where insertion sort might be preferred is when the array has fewer elements and is already, or nearly sorted as it would skip the swapping.