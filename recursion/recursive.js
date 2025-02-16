/* 
Recursive

Basics

- Types of recursion (in terms of decision tree):
    1. One-branch
    2. Multi-branch

    - Recursive function have two parts:
    1. The base case
    2. The recursive case (the function calling itself)
        - smaller sub-problems whose result bobbles up in reverse order
        - 따라서 재귀 호출의 결과가 감이 잘 안온다면 베이스 케이스부터 시작해서,
          그 전 케이스가 반환하는 값이 뭔지 생각해보면 됨

- It's usually possible to convert into an iterative one, and vice versa.

Implementation
    1. Factorial


*/

/* Implementation 1 - Recursion */
// TC: O(n)
// SC: O(n) - call stack에 쌓인 재귀 호출
function factorial(n) {
  // Base case
  if (n <= 1) {
    return 1;
  }
  // Sub-problems
  return n * factorial(n - 1);
}
console.log(factorial(5));

/* Implementation 1 - Iterative */
// TC: O(n)
// SC: O(1) - more efficient than recursive solution in this case
function factorial(num) {
  let n = num;
  let res = 1;

  while (n > 1) {
    res = res * n;
    n--;
  }
}
console.log(factorial(5));
