# Depth-First Search

Depth First Search (DFS) is one of the most common algorithms in coding interviews. It is commonly used to traverse trees and graphs. In this lesson we will focus on trees.

If we want to traverse an entire tree, we have to visit every node. One way to accomplish this is by using depth-first search.

The idea is we pick a direction, say left, and keep following pointers as far down left as we can go until we reach null. Once we reach null, we backtrack to the parent node and then go right. We keep doing this until we have visited every node in the tree. This is the essence of depth-first search.

As the name implies, we go as deep as possible before we backtrack.

There are three ways to traverse a tree using depth-first search:

1. Inorder
2. Preorder
3. Postorder

Depth first search is best implemented using recursion, although it is possible to implement it iteratively using a stack.

## Inorder Traversal

An inorder traversal will recurively visit all the nodes in the left subtree, then visit the parent node and finally visit all the nodes in the right subtree. In this case, "visit" could mean anything from printing the node to performing some operation on it.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
function inorder(root) {
    if (root == null) {
        return;
    }
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}
```

Copy

The order in which these nodes will be visited is `[2,3,4,5,6,7]`, which is sorted. It is important to note that an inorder traversal will only print the nodes in a sorted order if the tree is a binary search tree.

> The reason the nodes will print in a sorted order is because of the BST property. Since we know all values to the left of a node are smaller, this means we won't hit our base case until we reach the left-most node which is also the smallest node. After visiting this, we will traverse up, visit the parent and then visit the right-subtree. The visual below shows this process.

![In-order Traversal](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/e8717d2e-69c7-4ec2-ce9c-6d8753d3cc00/sharpen=1)

> The order in which the nodes are visited is represented by the numbers in blue next to the node.

## Preorder Traversal

Alternatively, preorder traversal will visit the parent node first, then visit the left subtree and finally visit the right subtree.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
function preorder(root) {
    if (root == null) {
        return;
    }
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}
```

Copy

The nodes are visited in the following order `[4,3,2,6,5,7]`

![In-order Traversal](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/9388095e-8f09-4725-fc1d-27988a291c00/sharpen=1)

## Postorder Traversal

A postorder traversal will visit the left subtree, then the right subtree and finally the parent node last.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
function postorder(root) {
    if (root == null) {
        return;
    }  
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}
```

Copy

The order in which these nodes will be visited is: `[2,3,5,7,6,4]`

![In-order Traversal](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/1abfa778-c56d-4563-9860-5f58bcee6c00/sharpen=1)

## Time and Space Complexity

The following applies to all three of the traversal methods discussed.

### Time

We know that we have to visit every node in the tree, and if there are nn nodes in the tree, the algorithm will run in O(n)O(n), regardless of the height of the tree.

Another interesting point is that we could actually build a sorted array from the inorder traversal of a binary search tree. This is because the nodes are visited in sorted order.

### Space

The space complexity of the algorithm is O(h)O(h) where hh is the height of the tree, which would be O(log n)O(log n) for a balanced binary tree or O(n)O(n) for a skewed tree.