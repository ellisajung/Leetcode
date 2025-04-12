/* 
Recursion

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

문제 예시
    1. Factorial 팩토리얼 (One-branch)
    2. Fibonacci Sequence 피보나치 수열 (Two-branch)

*/

/* 예시 1 - Recursion */
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

/* 예시 1 - Iterative */
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

/* 예시 2 */
// TC: O(2^n)
function fibonacci(n) {
  // Base case: n = 0 or 1
  if (n <= 1) {
    return n; // f(0) = 0, f(1) = 1
  }
  // Recursive case: f(n) = f(n - 1) + f(n - 2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}
/* 
Decision tree:

                  f(5)
             /              \
          f(4)              f(3)
        /     \            /    \
      f(3)     f(2)      f(2)    f(1)
      /  \     /   \     /   \
    f(2) f(1) f(1) f(0) f(1) f(0)
   /  \
f(1) f(0)
*/
