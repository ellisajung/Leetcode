# Quick Sort

Quick sort is another divide and conquer algorithm used for sorting, similar to merge sort.

## Implementation

The idea behind quicksort is to pick an index, which is called the `pivot`. We then partition the array such that every value to the left is less than or equal to the `pivot` and every value to the right is greater than the pivot.

### Picking a pivot value

There are several ways to pick a pivot value. Some of the common ways are:

- Pick the first index
- Pick the last index
- Pick the median (pick the first, last and the middle value and find their median and perform the split at the median)
- Pick a random pivot

Ideally we can pick a pivot that would divide the array into two roughly equal halves. This would result in the most efficient sorting scenario.

For simplicity, in this lesson we will pick the last element as the pivot.

### Recursive partitioning

1. Once we pick a pivot we will partition the array such that all elements less than or equal to the pivot are on the left and the rest are on the right.
2. We will then recursively run quicksort on the left and right halves until we hit the base case which is an array of size `1`.

Unlike merge sort, there is no need to merge the two halves because the partitioning step itself is enough to sort the array.

In some sense, quick sort is the opposite of merge sort. Merge sort has a simple recursive step, but the complexity is in handling the merging of the two halves. Quick sort has a complex recursive step, but the complexity is in the partitioning step.

> There is also a variation of Quicksort called randomized Quicksort, where the pivot is picked randomly, or the array is shuffled if you like, and this reduces the chance of hitting the worst case. This results in O(n log n)O(n log n) in the worst case instead of the typical implementation where it is O(n2)O(n2). This [Stackoverflow](https://stackoverflow.com/questions/41513856/can-someone-clarify-the-difference-between-quicksort-and-randomized-quicksort#:~:text=The%20advantage%20of%20randomized%20quicksort,O\(n%20log%20n\).) post provides an interesting explanation behind it all.

### Performing a partition

Let's consider the array `[6,2,4,1,3]` as an example.

![alt text](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/4807fbac-d636-4b43-654d-345988be0500/sharpen=1)

As seen above, in the resulting array, we will have sorted the array such that all elements to the left are smaller than the `pivot` with the rest being on the right.

> We are not going to visualize all of the steps but this process will be run recursively until we hit the base-case. It is important to notice that we are not allocating any new memory for these partitions. We are just moving around pointers to work on a smaller part of the original array each time until we end up with a sorted array.

The pseudocode for this looks like the following.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
function quickSort(arr, s, e) {
    if (e - s + 1 <= 1) {
        return arr;
    }

    let pivot = arr[e];
    let left = s;       // pointer for left side

    // Partition: elements smaller than pivot on left side
    for (let i = s; i < e; i++) {
        if (arr[i] < pivot) {
            let tmp = arr[left];
            arr[left] = arr[i];
            arr[i] = tmp;
            left++;
        }
    }

    // Move pivot in-between left & right sides
    arr[e] = arr[left];
    arr[left] = pivot;

    // Quick sort left side
    quickSort(arr, s, left - 1);

    // Quick sort right side
    quickSort(arr, left + 1, e);

    return arr;
}
```

Copy

## Time and Space Complexity

The analysis of quicksort is similar to merge sort.

The partition step takes O(n)O(n) time and we do this for every level of the recursion tree. The number of levels in the recursion tree is O(log n)O(log n), but only in the best case.

The best case is that we pick a `pivot` such that we can always perform the partition in the middle. If the array is perfectly partitioned in the middle every single time and the pivot is the median, it is possible to keep getting O(n log n)O(n log n) as the ultimate result.

Continuously picking a pivot where the `pivot` element is the smallest or the largest element will result in the worst case performance of O(n2)O(n2). This is because our partitioning will not be effective and we will end up with a partition of size `n-1` and `0` respectively, making the height of our recursion tree `n`.

## Stability

Quicksort is not a stable algorithm because it exchanges non-adjacent elements.

Take the array `[7,3,7,4,5]` where we have two 7s, one at the 0th index and one at the 2nd index. In this case, if our pivot is the 4th and the last index, we will end up with `[3,4,7,7,5]` where the 7 from the 0th index is now at 3rd index, which means that the relative order of the 7's has been reversed.