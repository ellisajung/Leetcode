/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let n = grid.length
    const directions = [
        [0, 1], 
        [0, -1], 
        [1, 0], 
        [-1, 0], 
        [-1, 1], 
        [-1, -1], 
        [1, 1],
        [1, -1]
    ]
    if (grid[0][0] === 1) return -1;

    let queue = [[0,0]]
    
    let length = 1
    while (queue.length > 0) {
        let lv = queue.length
        for (let i=0; i<lv; i++) {
            let [r, c] = queue.shift()
            if (r===n-1 && c===n-1) return length

            for (const [dr, dc] of directions) {
                let newR = r+dr
                let newC = c+dc
   
                if (newR < 0 || newR === n) continue;
                if (newC < 0 || newC === n) continue;
                if (grid[newR][newC] === 1) continue;
   
                queue.push([newR, newC])
                grid[newR][newC] = 1
            }
        }
        length++
    }

    return -1
};