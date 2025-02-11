/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // let L = matrix[0][matrix[0].length -1] // 첫 2차원 배열의 마지막 요소 인덱스
    // let R = matrix[matrix.length-1][0] // 마지막 2차원 배열의 첫 요소 인덱스

    let L = 0;
    let R = matrix.length - 1;

    while (L <= R) {
      let mid = Math.floor(L + (R - L) / 2);

      if (target > matrix[mid][matrix[mid].length - 1]) {
        // mid 인덱스의 2차원 배열의 마지막 요소
        L = mid + 1;
      } else if (target < matrix[mid][0]) {
        R = mid - 1;
      } else {
        // target이 있을 2차원 배열을 찾았으면, 여기서 중첩 이진검색 알고리즘 구현
        let subL = 0;
        let subR = matrix[mid].length - 1;
        while (subL <= subR) {
          let subMid = Math.floor(subL + (subR - subL) / 2);
          if (target > matrix[mid][subMid]) {
            subL = subMid + 1;
          } else if (target < matrix[mid][subMid]) {
            subR = subMid - 1;
          } else {
            return true;
          }
        }
        return false;
      }
    }
    return false

};