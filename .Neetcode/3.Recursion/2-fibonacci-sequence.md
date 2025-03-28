# Recursion (Two Branch)

A more common case of recursion is multi-branch recursion. In this lesson we will attempt to solve the **Fibonacci sequence** problem using two-branch recursion.

The Fibonacci sequence is a set of numbers that starts with 00 and 11, and each subsequent number is the sum of the two preceding numbers. The sequence starts like this: 0,1,1,2,3,5,8,13,21,34,...0,1,1,2,3,5,8,13,21,34,....

Generally, the formula to calculate the nthnth fibonacci number is to sum the the two previous fibonacci numbers, i.e. the (n−1)(n−1)th and (n−2)(n−2)th fibonacci numbers.

More formally, we say that:

1. F(0)=0F(0)=0 and F(1)=1F(1)=1
2. F(n)=F(n−1)+F(n−2)F(n)=F(n−1)+F(n−2)

Part 1 is the base case, and part 2 is the recursive case. The Fibonacci sequence is a classic example of a recursive function:

The below formula is the recursive formula for the Fibonacci sequence, also known as the recurrence relation:

fib(n)=fib(n−1)+fib(n−2)fib(n)=fib(n−1)+fib(n−2)

---

## Conceptualization

We can visualize the mathematical formula with the following tree.

![dsa-recursion-2](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/01fc8a19-c7e3-4de4-1a8f-22fa4d027e00/sharpen=1)

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
// Recursive implementation to calculate the n-th Fibonacci number
function fibonacci(n) {
    // Base case: n = 0 or 1
    if (n <= 1) {
      return n;
    }
    // Recursive case: fib(n) = fib(n - 1) + fib(n - 2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

Copy

The above pseudocode is similar to our previous example with factorial, except this is a branch factor of two. Notice how we are calling the function twice in the last line, this results in the tree that is shown in the visual.

### Animation of the Solution Code

We have our base case, we know the function calls itself in the last return statement, and we know that at some point when the base case is reached, we will have to travel back "up" to calculate the ultimate answer.

1. To calculate `fibonacci(5)`, we get `fibonacci(4) + fibonacci(3)`.
2. Now, both of these will execute within their own function calls. Looking at
3. `fibonacci(4)` will call `fibonacci(3) + fibonacci(2)` and so on, until `n` hits `1` or `0`
4. After that it will return the result, and keep going back up all the way until `fibonacci(4)` which will give us an answer of 33.
5. Now, we have the answer to `fibonacci(4)` and do the same for `fibonacci(3)` which results in 22.
6. Add the two together, and the 5th5th fibonacci number is 55.

### Time and Space Complexity

Evaulating the time complexity for this is a little bit more tricky. Let's analyze the tree, and the number of nodes on each one of the levels. On the 1st level (0 indexed), there is 11, on the 2nd level, there are 22, then 44, after which we can see a pattern. Each level has the potential to hold 22x the nodes of the previous level.

Therefore, a reasonable upperbound for the total number of nodes in the tree is 1+2+4+8+...+2n1+2+4+8+...+2n. This is a [geometric series](https://en.wikipedia.org/wiki/Geometric_series), similar to what we saw in the dynamic array chapter. We know the last term is the dominating term, and the sum of the series is roughly 2n+1−12n+1−1.

This means that the total number of nodes in the tree is O(2n)O(2n). Each node itself is a function call and simply calculates the sum of two values, thus the time complexity of the function is O(2n)O(2n).

![dsa-recursion-2](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/8c0f970f-decf-4931-f875-fa521d267800/sharpen=1)