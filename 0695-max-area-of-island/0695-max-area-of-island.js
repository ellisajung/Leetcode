/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let rows=grid.length, cols=grid[0].length

    function dfs(grid, r, c) {

        if (r<0 || c<0 || r>=rows || c>=cols || grid[r][c]===0) {
            // return // 이러면 undefined이 반환
            return 0
        }

        grid[r][c] = 0
        let count = 1

        count += dfs(grid, r+1, c)
        count += dfs(grid, r-1, c)
        count += dfs(grid, r, c+1)
        count += dfs(grid, r, c-1)

        return count
    }
    
    let max = 0
    // let count = 0
    for (let r=0; r<rows; r++) {
        for (let c=0; c<cols; c++) {
            if (grid[r][c]===1) {
                let res = dfs(grid, r, c)
                max = Math.max(res, max)
            }
        }
    }

    return max
};