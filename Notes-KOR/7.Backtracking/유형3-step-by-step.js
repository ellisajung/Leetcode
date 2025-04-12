/* 
Backtracking

dfs(0)

// push nums[0]=1 -> subset=[1] 
dfs(0)

// push nums[1]=2 -> subset=[1,2]
dfs(1)
dfs(0)

// push nums[2]=3 -> subset=[1,2,3]
dfs(2)
dfs(1)
dfs(0)

// push subset -> res=[[1,2,3]] "return"
dfs(3)
dfs(2)
dfs(1)
dfs(0)

// pop -> subset=[1,2]
dfs(2)
dfs(1)
dfs(0)

// push subset -> res=[[1,2,3], [1,2]] "return"
dfs(3)
dfs(2)
dfs(1)
dfs(0)

// pop -> subset=[1]
dfs(1)
dfs(0)

// push nums[2] -> subset=[1,3]
dfs(2)
dfs(1)
dfs(0)

// push subset -> res=[[1,2,3], [1,2], [1,3]] "return"
dfs(3)
dfs(2)
dfs(1)
dfs(0)

// pop -> subset=[1]
dfs(2)
dfs(1)
dfs(0)

// push subset -> res=[[1,2,3], [1,2], [1,3], [1]] "return"
dfs(3)
dfs(2)
dfs(1)
dfs(0)

// pop -> subset=[]
dfs(0)

// push nums[1]=2 -> subset=[2]
dfs(1)
dfs(0)

// push nums[2]=3 -> subset=[2,3]
dfs(2)
dfs(1)
dfs(0)

// push subset -> res=[[1,2,3], [1,2], [1,3], [1], [2,3]] "return"
dfs(3)
dfs(2)
dfs(1)
dfs(0)

// pop -> subset=[2]
dfs(2)
dfs(1)
dfs(0)

// push subset -> res=[[1,2,3], [1,2], [1,3], [1], [2,3], [2]] "return"
dfs(3)
dfs(2)
dfs(1)
dfs(0)

// pop -> subset=[]
dfs(1)
dfs(0)

// push nums[2]=3 -> subset=[3]
dfs(2)
dfs(1)
dfs(0)

// push subset -> res=[[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3]] "return"
dfs(3)
dfs(2)
dfs(1)
dfs(0)

// pop -> subset=[]
dfs(2)
dfs(1)
dfs(0)

// push subset -> res=[[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3], []] "return"
dfs(3)
dfs(2)
dfs(1)
dfs(0)

return res
// res=[[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3], []]

*/
