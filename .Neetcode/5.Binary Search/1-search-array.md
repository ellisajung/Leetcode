# Binary Search (Search an Array)

Binary search is an efficient way of searching for elements within a sorted array. Typically we are given an array, and a `target` element to search for.

The idea behind binary search is similar to how we would search for a word in a dictionary. We would open the dictionary in the middle and determine if the word we are looking for is in the left or right half. We would then repeat this process until we find the word or determine that it doesn't exist in the dictionary.

Similarly, binary search divides a given array by the middle index, called `mid` and compares the value at `mid` to the `target` value. If the `target` is greater than the `mid` value, we will search the right half of the array. If the `target` is less than the `mid` value, we will search the left half of the array.

In interviews and algorithmic problems, there are two common variations of binary search problems:

1. **Search Array** - a sorted array, and a `target` is given and the task is to determine if the target is found in the array.
2. **Search Range** - a range of numbers is given rather than an array, without a specific `target`.

## Implementation

Given an array, we initially consider the entire array as our search space. We do this by setting two pointers, `L` and `R`, to the left-most and right-most indices of the array respectively.

We calculate the `mid` index by adding the `L` and `R` pointers and dividing the result by 22. This is the middle of our search space.

1. `L` - the left-most index of the current subarray.
2. `R` - the right-most index of the current array.
3. `mid` - `L + R / 2`, the index at which the current sub-array divides itself into two equal halves.

> `L` and `R` are sometimes referred to as `low` and `high`. You can choose variable names that make more sense to you, such as `left` and `right`.

Next, we will compare the value at the `mid` index to the `target` value. Either we will find the `target` at the `mid` index, or we will determine if the `target` is in the left or right half of the remaining search space. At each step, we will eliminate half of the search space.

### 1. Target exists in the array

Consider the `arr = [1,2,3,4,5,6,7,8]` as an example, where `5` is our `target`.

We know that our `L` will start at the `0th` index and `R` will start at `7th` index, which is `arr.length - 1`. Calculate the `mid` by (7+0) / 2=3(7+0) / 2=3. Now we can compare the value at index 33 to our target element.

Our target 55 is greater than `nums[3]` which is 4. Thus, we need to search the larger numbers in the search space, and since the array is sorted, the larger numbers reside on the right. Thus, we assign `L` to `mid + 1`, which determines our lower boundry. The `R` pointer stays where it is.

This eliminates all the numbers on the left side of the search space.

On the next iteration, calculating `mid` gives us 55. Looking at the 5th index, the element is 66 and our target 55 is less than 66. Now we need to look for elements smaller than 66 in our search space which are on the left.

Therefore, our `R` pointer is assigned to `mid - 1`. The `L` pointer points to the 4th index and `R` pointer also points to the 4th index. The new `mid` results in 44 and indeed, our target exists at the 4th index, so we can return `mid`.

![alt text](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/84ece94d-88ad-4e76-9361-fde39487d800/sharpen=1)

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
const arr = [1, 3, 3, 4, 5, 6, 7, 8]

function binarySearch(arr, target) {
    let L = 0, R = arr.length - 1;

    while (L <= R) {
        let mid = Math.floor((L + R) / 2);

        if (target > arr[mid]) {
            L = mid + 1;
        } else if (target < arr[mid]) {
            R = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
```

Copy

> A better formula for calculating the `mid` value is `L + (R - L) / 2`. This will prevent any potential integer overflow errors. This article from [Google Research](https://ai.googleblog.com/2006/06/extra-extra-read-all-about-it-nearly.html) provides an intuitive explanation.

### 2. Target does not exist in the array

It's also possible that the `target` does not exist in the array that we are searching. Let's take the same array, `arr = [1,2,3,4,5,6,7,8]`, but this time our `target` is 99.

In this example our left pointer ends up out of bounds. More generally, we know that we have exhausted the search space when `L` is greater than `R`.

![alt text](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/719bef09-3014-4649-f7a2-745eee643800/sharpen=1)

## Time and Space Complexity

The work being done is very similar to that of the merge-sort algorithm where we are dividing the array in half until we reach an array of size 11.

Thus we end up with the same formula where xx is the number of times we can divide the array in half until we reach an array of size 11.

1=n/2x1=n/2x

After solving for xx, we get x=log2(n)x=log2​(n).

Thus, the time complexity for binary search will be O(log n)O(log n).