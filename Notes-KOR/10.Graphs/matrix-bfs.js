/* 


출제 유형
    1. Finding the shortest path
    2. Multi-source bfs
*/

// Matrix (2D Grid)
let grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

// Shortest path from top left to bottom right
function bfs(grid) {
  let ROWS = grid.length;
  let COLS = grid[0].length;
  let visit = new Array(ROWS).fill(0).map(() => Array(COLS).fill(0)); // 4x4 2d array
  let queue = [];

  // starting vertex
  queue.push([0, 0]);
  visit[0][0] = 1;

  let length = 0;
  while (queue.length > 0) {
    let queueLength = queue.length;
    // one layer
    for (let i = 0; i < queueLength; i++) {
      let cur = queue.shift();
      let [r, c] = cur;
      // destination
      if (r == ROWS - 1 && c == COLS - 1) {
        return length; // result
      }
      // We can directly build the four neighbors
      let neighbors = [
        [r, c + 1],
        [r, c - 1],
        [r + 1, c],
        [r - 1, c],
      ];
      // 사방으로 탐색
      for (const dir of neighbors) {
        let [newR, newC] = dir;
        if (
          Math.min(newR, newC) < 0 ||
          newR === ROWS ||
          newC === COLS || // 범위 벗어나거나
          visit[newR][newC] == 1 || // 이미 방문했거나
          grid[newR][newC] == 1 // 막혔거나
        ) {
          continue; // 다음 방향 탐색
        }
        queue.push([newR, newC]);
        visit[newR][newC] = 1;
      }
    }
    length++;
  }
}
