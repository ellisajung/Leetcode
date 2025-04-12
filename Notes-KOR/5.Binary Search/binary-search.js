/* 
이진 탐색 (Binary Search)

TC: O(log n)

빈출 유형:
1. Search Array - 정렬된 배열과 target이 주어지고, 배열에 target이 있는지 찾는 문제
                  -> 있으면 target의 인덱스 반환, 없으면 -1 반환
2. Search Range - 특정 범위의 숫자 내에 특정 컨디션을 만족시키는 n을 찾는 문제

*/

/* 1번 유형 */
// 0 인덱스에서 시작하는 L 포인터와, length-1 인덱스에서 시작하는 R 포인터
// L, R 포인터의 중간 인덱스인 M: M = Math.floor((L + R) / 2)
// while L <= R 인 동안
// target < array[M] 일 경우, R 포인터를 M으로 이동
// target > array[M] 일 경우, L 포인터를 M으로 이동
// target = array[M] 일 경우, M을 반환
// while loop를 한번 돌 때마다 가능한 경우의 수를 절반씩 날리며 진행
// while loop가 끝났는데도 target을 찾지 못할 경우,
// target은 주어진 배열에 존재하지 않음
