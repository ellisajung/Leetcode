# Insertion and Removal from a Binary Search Tree

We mentioned previously that the main benefit of using BSTs over sorted arrays is that we can perform removal and insertion in O(log n)O(log n) time. This assumes that the tree is balanced. Let's discuss these two operations in more detail.

## Insertion

If we wish to insert a new node into the BST, we first have to traverse the BST to find the right position, and then insert this node. We must make sure we maintain the sorted property of the BST, just like we would with a sorted array.

If we have a BST `[4]`, and wish to insert 66, this could be done in two different ways:

1. `[4,null,6]` where the root is `4` and right child is `6`
2. `[6,4,null]` where the root is `6` and left child is `4`

Both of these would be valid BSTs. In the first example, we added the 66 as a leaf node, which is an easier process than the second example.

Let's add `5` to the first scenario tree `[4,null,6]`, which results in `[4,null,6,5,null]`.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
// Insert a new node and return the root of the BST.
function insert(root, val) {
    if (root == null) {
        return new TreeNode(val);
    }

    if (val > root.val) {
        root.right = insert(root.right, val);
    } else  if (val < root.val) {
        root.left = insert(root.left, val);
    }
    return root;
}
```

Copy

To summarize the code above:

1. If the current node is `null`, we return a new node with the value `val`.
2. If the value is greater than the current node, we recursively call the function with the right child of the current node.
3. If the value is less than the current node, we recursively call the function with the left child of the current node.
4. We return the current node after the recursive call.

Notice that we return a new node if the current node is `null`. This is how we add a new node to the tree. Even in the recursive case, we return the current node after the recursive call.

Notice that the return values from the recursive calls are assigned to either the left or right child of the current node. This is how we maintain the tree structure.

The time complexity of the insertion operation is O(log n)O(log n) if the tree is balanced. This is because we with continue until we reach a leaf node and thus the number of nodes we visit is proportional to the height of the tree.

![alt text](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/3058308c-aaea-4f7c-c312-7001bbd0f800/sharpen=1)  
The visual above demonstrates how insertion is done. 66 is greater than the root node, so it ends up in the right sub-tree. 55 is greater than the root node but smaller than 66 so it ends up in the left subtree of the tree rooted at 66.

## Removal

Before removing a node from a BST, we need to consider two cases:

1. The target node has 0 or 1 child
2. The target node has 2 children

### Case 1 - The target node has one child or no children

If we wish to delete node `2`, which has no children, the `left_child` pointer of `3` now points to `null`.

![alt text](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/b8f1af6e-2fe6-4429-8765-abf1b92e7a00/sharpen=1)

If we wish to delete node `3`, which has one child, the `left_child` pointer of the root node will point to `2` instead of `3`.

![alt text](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/2fa45c14-0ff4-4fdb-20de-795041eeb800/sharpen=1)

### Case 2 - The target node has two children

If we wanted to delete a node with two children, say, `6`, we replace the node with its **in-order successor.**

The in-order successor is the left-most node in the right subtree of the target node. Another way of looking at it is that it is the smallest node among all the nodes that are greater than the target node. This will ensure that the resulting tree is still a valid binary search tree.

The visual below shows process of deletion of nodes with two children.

![alt text](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/7cfb33fa-565b-40d4-3938-399d06e48200/sharpen=1)

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
// Return the minimum value node of the BST.
function minValueNode(root) {
    let curr = root;
    while(curr != null && curr.left != null) {
        curr = curr.left;
    }
    return curr;
}

// Remove a node and return the root of the BST.
function remove(root, val) {
    if (root == null) {
        return null;
    }
    if (val > root.val) {
        root.right = remove(root.right, val);
    } else if (val < root.val) {
        root.left = remove(root.left, val);
    } else {
        if (root.left == null) {
            return root.right;
        } else if (root.right == null) {
            return root.left;
        } else {
            let minNode = minValueNode(root.right);
            root.val = minNode.val;
            root.right = remove(root.right, minNode.val);
        }
    }
    return root;
}
```

Copy

## Time and Space Complexity

### Time

The time complexity of inserting and removing from a BST is proportional to the height of the tree. This is because we are essentially running a binary search on the tree until we reach the target position to insert into, or the target node to remove.

The time complexity of these operations is O(log n)O(log n) if the tree is balanced. However, if the tree is unbalanced, the time complexity can be O(n)O(n) in the worst case.

### Space

The space complexity of these operations is O(log n)O(log n) in the best case and O(n)O(n) in the worst case. This is because we are using recursion to traverse the tree, and the number of recursive calls is proportional to the height of the tree.