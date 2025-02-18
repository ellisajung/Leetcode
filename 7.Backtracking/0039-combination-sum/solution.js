/* 
Combination Sum

backtrack(0, 0)

// push candidates[0]=2 -> sol=[2]
backtrack(0, 0)

// push candidates[0]=2 -> sol=[2,2]
backtrack(0, 0+2=2)
backtrack(0, 0)

// push candidates[0]=2 -> sol=[2,2,2]
backtrack(0, 0+2+2=4)
backtrack(0, 0+2=2)
backtrack(0, 0)

// push sol -> res=[2,2,2] "return"
backtrack(0, 0+2+2+2=6)
backtrack(0, 0+2+2=4)
backtrack(0, 0+2=2)
backtrack(0, 0)


...


*/
