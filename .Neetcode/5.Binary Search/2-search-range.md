# Binary Search (Search Range)

## Concept

Imagine you picked a number from `1 - 100` and asked your friend to guess the number you were thinking of. There are three outcomes. Either their guess is correct, too small or too large.

After every guess, you would tell them if their guess was correct, too small or too large. Your friend would then adjust their next guess accordingly.

## Implementation

At its core, this is a binary search problem. As long as there is a way to determine if the number is too big, too small or correct, we can adjust the search space accordingly.

In many problems, comparing the guess to the target is done by a predefined function or some math equation. For example, in this problem assume we are given a function `isCorrect(n)` that returns `1` if `n` is too big, `-1` if `n` is too small and `0` if `n` is correct.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
// Return 1 if n is too big, -1 if too small, 0 if correct
function isCorrect(n) {
    if (n > 10) {
        return 1;
    } else if (n < 10) {
        return -1;
    } else {
        return 0;
    }
}
```

Copy

> In this example, it is hardcoded with `10` as the correct number.

We can now use this function to element binary search. We calculate the middle of the search space and pass it to the `isCorrect` function as our guess. Depending on the return value, we adjust our search space accordingly.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
// Binary search on some range of values
function binarySearch(low, high) {
    let mid;

    while (low <= high) {
        mid = (low + high) / 2;

        if (isCorrect(mid) > 0) {
            high = mid - 1;
        } else if (isCorrect(mid) < 0) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}
```

Copy

This technique can be confusing and can come across as very subtle because you have to figure out how to modify the typical implementation of binary search. For questions like these, a predefined method API is given, in this case, `isCorrect` and you are required to treat the function as a black-box and use it within your own binary search method.

## Time and Space Complexity

Since this is a traditional binary search problem, the time complexity is O(log n)O(log n) where nn is the size of the search space.

No additional space is used in this implementation, so the space complexity is O(1)O(1).