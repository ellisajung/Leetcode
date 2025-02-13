// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */

// var numIslands = function(grid) {
//     let rows= grid.length, cols=grid[0].length

//     function dfs(grid, r, c) {
//         if (r<0 || c<0 || r>=rows || c>=cols || grid[r][c]==="0") {
//             return
//         }

//         grid[r][c] = "0"

//         dfs(grid, r+1, c)
//         dfs(grid, r-1, c)
//         dfs(grid, r, c+1)
//         dfs(grid, r, c-1)
//     }

//     let count = 0
//     for (let r=0; r<rows; r++) {
//         for (let c=0; c<cols; c++) {
//             if (grid[r][c]==="1") {
//                 count++
//                 dfs(grid, r, c)
//             }
//         }
//     }

//     return count
// };

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let rows = grid.length,
    cols = grid[0].length;

  function dfs(grid, r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) {
      return;
    }

    grid[r][c] = 0;
    let count = 1;

    count += dfs(grid, r + 1, c);
    count += dfs(grid, r - 1, c);
    count += dfs(grid, r, c + 1);
    count += dfs(grid, r, c - 1);

    console.log("count: ", count);
    return count;
  }

  let max = 0;
  // let count = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        console.log("r: ", r);
        console.log("c: ", c);
        let res = dfs(grid, r, c);
        max = Math.max(res, max);
      }
    }
  }

  console.log(max);
  return max;
};

console.log(
  maxAreaOfIsland(
    (grid = [
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ]),
  ),
);
