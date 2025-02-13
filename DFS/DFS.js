/* Recursive DFS & Matrix */

// Basic Implementation
// Count the unique path from the top left to the bottom right.
// A single path may only move along 0's and can't visit the same cell more than once.

// Count paths (backtracking)
function dfs(grid, r, c, visit) {
  // base cases
  let ROWS = grid.length,
    COLS = grid[0].length;

  if (
    Math.min(r, c) < 0 ||
    r == ROWS ||
    c == COLS || // go out of bounds
    visit[r][c] == 1 || // already visited
    grid[r][c] == 1 // blocked
  ) {
    return 0;
  }
  if (r == ROWS - 1 && c == COLS - 1) {
    // reached the right bottom
    return 1;
  }
  visit[r][c] = 1;
  // 베이스 케이스일 경우 방문 표시를 할 필요가 없기 때문에
  // 베이스 케이스 이후에 실행

  let count = 0;
  // 아래 순서에 따라서 어떤 방향을 우선적으로 탐색할지 결정됨 (오-왼-아-위)
  count += dfs(grid, r, c + 1, visit);
  count += dfs(grid, r, c - 1, visit); // 위의 dfs 재귀호출들이 끝날 때까지 실행되지 않음(콜 스택에 존재 x)
  count += dfs(grid, r + 1, c, visit);
  count += dfs(grid, r - 1, c, visit); // 위로 가는 경우는 대부분 방문했던 곳

  visit[r][c] = 0;
  return count; // count를 반환하고 스택에서 pop
}

let matrix = [
  [0, 0, 0],
  [1, 0, 0],
  [1, 0, 0],
];

dfs(matrix, 0, 0, new Set()); // 이렇게 해서 전달한 해쉬맵을 이후 재귀호출에서 모든 visit이 같은 해쉬 맵 참조

/* Iterative DFS & Adjacent List */

/* 재귀 DFS vs 반복문 DFS */

// 재귀 DFS
// 자바스크립트 엔진 자체가 내부적으로 콜 스택을 사용해서 함수 호출을 관리하기 때문에 명시적으로 스택을 생성할 필요가 없음 (반복문 DFS와의 차이점)
// 간단하지만 깊이가 깊어질 경우 스택 오버플로우 위험 존재
// 함수가 끝나면 자동으로 pop

// 반복문 DFS
// 명시적으로 stack=[] 을 선언하고, pop을 해서 관리
// 명시적 스택을 사용하므로 실제 자바스크립트 콜스택과 다르게 관리 가능
// while loop를 사용해서 직접 pop
