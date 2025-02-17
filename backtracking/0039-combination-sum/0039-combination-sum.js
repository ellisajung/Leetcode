// 우선 한 요소를 추가할 수 있는 만큼 추가하고
// sum이 target보다 커지면 백트레킹하며 i+1 요소 추가
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [],
    sol = [];

  const backtrack = (i, sum) => {
    // base case 1
    if (sum === target) {
      res.push([...sol]);
      return;
    }
    // base case 2
    if (sum > target || i === candidates.length) {
      return;
    }

    // 현재 요소를 선택하는 경우 (우선 탐색)
    sol.push(candidates[i]);
    backtrack(i, sum + candidates[i]); // 호출되는 시점에 누적된 sum + 요소 값

    // 현재 요소를 선택하지 않는 경우
    sol.pop();
    backtrack(i + 1, sum); // 호출되는 시점에 누적된 sum
  };

  backtrack(0, 0);

  return res;
};

/* 
candidates = [2,3,6], target = 6

decision tree:
  
                                       []
                                /                    \ -> 오른쪽 노드들에는 모두 2가 포함되지 않음
                              [2]                       []
                          /              \
                      [2,2]                [2]
                /                \
          [2,2,2]                [2,2]
          /       \               /   \
  [2,2,2,2]     [2,2,2]         []
    /          /        \
[2,2,2,2,2] [2,2,2,3]   [2,2,2,6]
   /         /   \
...  [2,2,2,3,3] [2,2,2,3,6]
*/
