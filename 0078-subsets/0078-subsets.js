// 1.subproblem
// 1을 포함시킬지 말지, 각 경우에 대해 다시 2를 포함시킬지 말지...
// 이를 decision tree로 나타내면 아래와 같다:
//                        []
// 0                /                 \
//              [1]                    []
// 1           /     \             /        \
//         [1,2]       [1]        [2]       []     
// 2      /    \      /    \     /   \     /   \ 
//    [1,2,3] [1,2] [1,3] [1] [2,3] [2]  [3]   []  
// 각 leaf 노드는 부분집합이 되고,
// base case는 문제에서 부분집합을 구하라고 하였으므로 laef 노드에 해당한다.
// recursive case는 dfs 방식으로 tree를 탐색하는 것이 된다.
// 위의 예시에서는 최대한 포함시키는 경우를 우선적으로 탐색한 다음,
// 백 트레킹하며 포함시키지 않는 경우를 탐색한다.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res=[], subset=[]
    
    const dfs = (i) => {
        // Base case
        if (i >= nums.length) {
            res.push([...subset])
            return
        }

        // Recursive case
        subset.push(nums[i])
        dfs(i+1)

        subset.pop()
        dfs(i+1)
    }

    dfs(0)

    return res
    
    
};