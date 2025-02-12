/* 내 풀이 1 */
// Runtime: 50ms
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1,
    right = n;

  while (left <= right) {
    let pick = Math.floor((left + right) / 2);

    if (guess(pick) < 0) {
      right = pick - 1;
    } else if (guess(pick) > 0) {
      left = pick + 1;
    } else {
      return pick;
    }
  }
};

/* 다른 사람 풀이 1 */
// Runtime: 29ms
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (guess(mid) === 0) {
      return mid;
    } else if (guess(mid) === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

/* 
두 풀이 차이점으로 살펴본 최적화 포인트

1. 대소 비교 연산자(<, >)와 일치 연산자(===) 쓰임의 차이
    -> 두 연산자의 성능 차이는 거의 없거나 무시할 수 있는 수준. 
    -> 피연산자가 숫자가 아닐 경우 <, >는 불필요한 타입 변환이 일어날 수 있음.

2. 더 빨리 return할 수 있는 조건을 먼저 검사
    -> 실행 시간 차이의 결정적 이유

3. 두 풀이 모두 함수를 중복해서 호출하고 있음.
    -> 한번만 호출한 후 변수에 저장

*/
