/* 내 풀이 1 */
// k의 범위: 1 - max(piles)
// 모든 바나나를 먹는 데 소요되는 시간: piles를 순회하며, 소요시간 += Math.ceil(pile/k)
// 총 소요시간이 h보다 크면, L를 k+1로 이동
// 총 소요시간이 h보다 작으면, R를 k-1로 이동
// 같으면 k 반환
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1,
    right = 1;
  piles.forEach((pile) => {
    right = Math.max(right, pile);
  });
  // Math.max(...array)

  while (left <= right) {
    let k = Math.floor(left + (right - left) / 2);
    let totalTime = 0;
    piles.forEach((pile) => {
      totalTime += Math.ceil(pile / k);
    });

    if (totalTime > h) {
      left = k + 1;
    } else if (totalTime <= h) {
      right = k - 1;
    }
  }

  return left;
};
