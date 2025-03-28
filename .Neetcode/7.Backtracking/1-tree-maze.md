# Backtracking

Backtracking is an algorithm with a lot of overlap with DFS. It operates on a brute-force approach which is to try all possible solutions and backtrack when we hit a dead-end.

Imagine that we are trapped in a maze and we are trying to find our way out. We can try all possible paths until we find the correct one. If we hit a dead-end, we backtrack and try another path. This is the essence of backtracking.

## Motivation with Example

Given a binary tree, we want to determine if there exists a path from the root to a leaf node without having a value of `0` in the path. If such a path exists, we return `true`, otherwise we return `false`.

### Valid Path Exists

### Valid Path Does Not Exist

---

The first thing that comes to mind is using depth-first search. Our constraint is that we cannot have a node with value `0` in our path. We also know that if the tree is empty, then there cannot exist a valid path either. Finally, if we reach a leaf node we can return `true` since it means there is a path that exists from root to leaf.

If there is a solution, it will either be in the left-subtree or the right-subtree.

1. We can arbitrarily choose to explore the left-subtree first.
2. If the left-subtree returns `true`, we can return `true` as well.
3. If the left-subtree returns `false`, we can explore the right-subtree.
4. If the right-subtree returns `true`, we can return `true` as well.
5. If both the left and right subtrees return `false`, we can return `false` as well.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}   
  
function canReachLeaf(root) {
    if (root == null || root.val == 0) {
        return false;
    } 
    if (root.left == null && root.right == null) {
        return true;
    }
    if (canReachLeaf(root.left)) {
        return true;
    }
    if (canReachLeaf(root.right)) {
        return true;
    }
    return false;
}
```

Copy

Given the tree, `[4,0,1,null,7,2,0]`, the valid path would look like the following, as shown in the visual. A path is invalid if it has a `0` in it.

![dsa-backtracking-1](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/eee1dde9-450c-436e-f62a-7a2328d8bf00/sharpen=1)

## Building the Path

Let's take a look at a slight variation of the question where instead of just returning `true` or `false`, we also build the path if it exists. The path should contain the values of the root to leaf path in the order they are visited.

In this problem, we can pass a parameter `path`, which is a list to store all the nodes that are in the valid path. So, given the tree `[4,0,1,null,7,3,2,null,null,null,0]`, we first add the root node to our list.

Since there is only one valid path, it will either be in the left-subtree or the right-subtree.

1. The left-subtree is invalid because `4`'s left child is `0`, thus we return false and now recursively check the right-subtree.
2. Going to the right, `1` is valid, so we add it to our list.
3. Now, we check `3`, which is valid, so it gets added to our list.
4. `3`'s left child is null, so we return false.
5. Checking `3`'s right child, we again hit the base case.
6. Now, we must remove `3` from our stack because if there existed a valid path, we would have returned true already.
7. We go back up to the `3`'s parent, which is `1`, and check its right subtree.
8. We add `2` to our list. We then explore `2` but 2 is a leaf node, which makes the recursive call return true, after which the function returns true.
9. Our valid path is `[4,1,2]`.

The visual below demonstrates this process.

![dsa-backtracking-2](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/e8f4343e-0018-4a98-4884-c5aaa513d000/sharpen=1)

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
function leafPath(root, path) {
    if (root == null || root.val == 0) {
        return false;
    }
    path.push(root.val);

    if (root.left == null && root.right == null) {
        return true;
    }
    if (leafPath(root.left, path)) {
        return true;
    }
    if (leafPath(root.right, path)) {
        return true;
    }
    path.remove(path.size() - 1);
    return false;
}
```

Copy

## Time and Space Complexity

### Time

Given that the tree has nn nodes, the time complexity will be O(n)O(n) because in the worst case we may need to visit all the nodes in the tree.

### Space

The space complexity is O(h)O(h) where hh is the height of the tree. This is because we are using recursion and the maximum depth of the recursion is the height of the tree. We are also storing the nodes along the path in the `path` list, which will have a maximum of O(h)O(h) elements at any given time.

## Closing Notes

Backtracking is a common algorithm pattern and it applies to more than just binary trees as we will see in the later lessons.