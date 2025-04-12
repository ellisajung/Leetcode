/* 
Binary Search Trees (BST)

Inserting - step by step 

(4, 5)

(7, 5)
(4, 5)

(null, 5)
(7, 5)
(4, 5)

(null, 5) -> return TreeNode(5)
(7, 5)
(4, 5)

(7, 5) root.left = 5 -> return 7
(4, 5)

(4, 5) root.right = 7 -> return 4




Deleting - step by step 


(4, 7)

(7, 7)
(4, 7)

min (8, 7) -> return 8
    (7, 7)
    (4, 7)

(7, 7) 7 -> 8
(4, 7)

*/
