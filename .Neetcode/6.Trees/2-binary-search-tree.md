# Binary Search Trees

## Binary Trees vs Binary Search Trees

Binary Search Trees (BST) are a variation of binary trees with the addition of a sorted property. The property is that every node in the left subtree is smaller than the root and every node in the right subtree is greater than the root.

This is a recursive property, meaning that it applies to every node in the tree. This property is analogous to having a sorted array.

## Motivation

With BSTs we can search for values in O(log n)O(log n) time just like with a sorted array.

BSTs are often preferred over sorted arrays because they allow for insertion and deletion in O(log n)O(log n) time. This is not possible with sorted arrays, which require O(n)O(n) time for these operations.

## BST Search

Since trees are a recursive data structure, the simplest way to traverse them is using recursion.

Let's take the tree `[2,1,3,null,null,null,4]` for example and search for `target = 3`.

In binary search, if the target was less than the middle element, we went left. If the target was greater than the middle element, we went right.

A similar approach can be taken with BSTs. We know all nodes to the left are smaller than our current node and all nodes to the right are greater than our current node. Thus, recursively search the right subtree if our target is greater than the current node and the left subtree if our target is smaller.

If we reach the node with the `target` value, we will return `true`. Otherwise, we return `false`.

In this example, we first start by comparing the root value against the `target`. `2` is too small, so our target must be on the right, meaning we can eliminate the left-subtree. When we go right, the first node is `3`, which equals `target`, so we return true from the recursive call, meaning our target does exist in the tree.

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/9c42ae26-33f4-4110-e49b-509c7dae3600/sharpen=1)

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
function search(root, target) {
    if (root == null) {
        return false;
    }

    if (target > root.val) {
        return search(root.right, target);
    } else if (target < root.val) {
        return search(root.left, target);
    } else {
        return true;
    }    
}
```

Copy

1. If we reach a null node, we return `false` because the target does not exist in the current tree.
2. If the target is greater than the current node, we search the right subtree.
3. If the target is less than the current node, we search the left subtree.
4. If the target is equal to the current node, we return `true`.

In part 2 and 3, we recursively call the function with the left or right child of the current node. The return value of the recursive call is the return value of the current function call as well.

Part 1 and 4 are the base cases of the recursion. If we reach a null node, we return `false` because the target does not exist in the current subtree. If the target is equal to the current node, we return `true`.

### Another Search

### Target Does Not Exist

## Time Complexity

If we have a balanced binary tree, our search algorithm will run in O(log n)O(log n) time. Balanced binary tree means that the height of the left-subtree is equal to the height of the right-subtree, or there is a difference of 11.

In a balanced tree, we can eliminate half the nodes each time, which results in O(log n)O(log n), for reasons we discussed in the merge sort and binary search lessons.

In the worst case we have a skewed tree, where the height of the tree is equal to the number of nodes. In this case, the time complexity will be O(n)O(n).