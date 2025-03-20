/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let rows = grid.length, cols = grid[0].length
    let queue = []
    let min = 0, fresh = 0
    
    for (let r=0; r<rows; r++) {
        for (let c=0; c<cols; c++) {
            if (grid[r][c] === 1) fresh++
            if (grid[r][c] === 2) queue.push([r, c])
        }
    }

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    while (queue.length>0 && fresh>0) {
        let lv = queue.length
        for (let i=0; i<lv; i++) {
            let cur = queue.shift()
            let [r, c] = cur

            for (const [dr, dc] of directions) {
                let row = r+dr
                let col = c+dc
                if (Math.min(row, col)<0 || row===rows || col===cols || grid[row][col]!==1) continue
                
                grid[row][col] = 2
                queue.push([row, col])
                fresh--
            }
        }
        min++
    }
    console.log(min, fresh)
    return fresh > 0 ? -1 : min

};