/* 
preorder & inorder 배열로 bst 복원하기


dfs(Infinity)
root = new TreeNode(preorder[0]=5) -> preIdx++
root.left = dfs(5)

dfs(Infinity)
root = new TreeNode(preorder[0]=5) -> preIdx++
root.left = dfs(5)
root = new TreeNode(preorder[1]=3) -> preIdx++
root.left = dfs(3)

dfs(Infinity)
root = new TreeNode(preorder[0]=5) -> preIdx++
root.left = dfs(5)
root = new TreeNode(preorder[1]=3) -> preIdx++
root.left = dfs(3)
root = new TreeNode(preorder[2]=2) -> preIdx++
root.left = dfs(2) -> inIdx++=1, return

dfs(Infinity)
root = new TreeNode(preorder[0]=5) -> preIdx++
root.left = dfs(5)
root = new TreeNode(preorder[1]=3) -> preIdx++
root.left = dfs(3)
root = new TreeNode(preorder[2]=2) -> preIdx++
root.right = dfs(5)
root = new TreeNode(preorder[3]=4) -> preIdx++
root.left = 


*/
