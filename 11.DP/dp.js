/* 

Dynamic Programming





*/


/* 1D Dynamic Programming */

// Brute Force
function bruteForce(n) {
    if (n <= 1) {
        return n;
    }
    return bruteForce(n - 1) + bruteForce(n - 2);
}

// Memoization
function memoization(n, cache) {
    if (n <= 1) {
        return n;
    }
    if (cache[n] != 0) {
        return cache[n];
    }
    cache[n] = memoization(n - 1, cache) + memoization(n - 2, cache);
    return cache[n];
}

// Dynamic Programming
function dp(n) {
    if (n < 2) { 
        return n;
    }
    let dp = [0,1]
    let i = 2;
    while (i <= n) {
        let tmp = dp[1];
        dp[1] = dp[0] + dp[1];
        dp[0] = tmp;
        i++;
    }
    return dp[1];
}



/* 2D Dynamic Programming */

// Brute Force - Time: O(2 ^ (n + m)), Space: O(n + m)
function bruteForce(r, c, rows, cols) {
    if (r == rows || c == cols) {
        return 0;
    }
    if (r == rows - 1 && c == cols - 1) {
        return 1;
    }
    return (bruteForce(r + 1, c, rows, cols) +  
            bruteForce(r, c + 1, rows, cols));
}   

// Memoization - Time and Space: O(n * m)
function memoization(r, c, rows, cols, cache) {
    if (r == rows || c == cols) {
        return 0;
    }    
    if (cache[r][c] > 0) {
        return cache[r][c];
    }    
    if (r == rows - 1 && c == cols - 1) {
        return 1;
    }
    cache[r][c] = (memoization(r + 1, c, rows, cols, cache) +  
                    memoization(r, c + 1, rows, cols, cache));
    return cache[r][c];
}  

// Dynamic Programming - Time: O(n * m), Space: O(m), where m is num of cols
function dp(rows, cols) {
    let prevRow = new Array(cols).fill(0); 
    for (let i = rows - 1; i >= 0; i--) {
        let curRow = new Array(cols).fill(0);
        curRow[cols - 1] = 1;
        for (let j = cols - 2; j >= 0; j--) {
            curRow[j] = curRow[j + 1] + prevRow[j];
        }
        prevRow = curRow;
    } 
    return prevRow[0];
}