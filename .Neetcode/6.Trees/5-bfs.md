# Breadth First Search

In depth-first search, we prioritized depth. For breath-first search (BFS), we prioritize breadth, meaning we focus on visiting all the nodes on one level before moving on to the next level.

BFS is also known as level-order traversal when referring to trees, since we visit the nodes level by level.

## Implementation

Generally, breadth-first search is implemented iteratively and that is the implementation we will be covering in this course.

Since we want to visit all the nodes on one level before moving to the next, we will need a data structure that allows us to do this.

A queue data structure, more specifically, a deque, allows us to remove elements both from the head and the tail in O(1)O(1) time. For BFS we will append elements to the tail and remove elements from the head as we go through each level of the tree from left to right.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
function bfs(root) { 
    let queue = [];
    if (root != null) {
        queue.push(root);
    }    
    let level = 0;
    while(queue.length > 0) {
        console.log("level " + level + ": ");
        let levelLength = queue.length;
        for (let i = 0; i < levelLength; i++) {
            let curr = queue.shift(); 
            console.log(curr.val + " ");
            if(curr.left != null) {
                queue.push(curr.left);  
            }
            if(curr.right != null) {
                queue.push(curr.right);
            }  
        }
        level++;
        console.log();
    }
}
```

Copy

1. Initially, we append the root node to our queue.
2. We then enter a while loop that runs as long as our queue is not empty.
3. We print the level we are currently on.
4. We loop through the queue and remove nodes in the current level.
5. If the node has children, we append them to the queue from left to right.
6. After the current level is done, we increment the level by 1.
7. Our queue becomes empty once we have visited all of the nodes and the outer while loop will terminate.

The visual below demonstrates what the state of the queue at every level of the tree would look like.

![bfs](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/ba15b069-dd3c-4224-41c1-d9accf16d700/sharpen=1)

## Time and Space Complexity

### Time

The time complexity of BFS is O(n)O(n) where nn is the number of nodes in the tree. This is because we visit every node exactly once.

### Space

The space complexity of BFS is O(n)O(n) where nn is the number of nodes in the tree. This is because we will store an entire level of the tree in the queue at a time. In the worst case the last level may be roughly half the size of the tree, so the space complexity is O(n)O(n).