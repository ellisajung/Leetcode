/* 
Binary Trees
    Connected, undirected graph with no cycles.
    Thus, a leaf node is always guaranteed to exist.

Basics
    - Root node, Child nodes(left & right node), Sibling nodes, Leaf nodes
    - Pointers: left child pointer, right child pointer
    - Descendant, Ancestors
    - Height of certain node: height from that node to the "leaf" node
    - Depth  ""             : depth from that node to the "root" node

*/

// Tree node class
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
