# Arrays vs Linked Lists

## Similarity

- Both are data structures that stores elements in an **ordered sequence**


## Differences

- (Singly) Linked Lists are made of objects called **ListNode** that contains two attributes: *value*, *next*.
	- `value`: stores the value of the node
	- `next`: stores the reference of the next node in the linked list

- How it's stored in memory 
    - Elements of arrays are stored contiguously in memory, while the nodes of linked lists are stored randomly in memory.
- Access 
    - The value of an array can be *directly accessed by index*(`O(1)`), while it of an linked list can be accessed by *traversing*(`O(n)`), starting from the head node and following the node chain connected via next pointer (since, in most case, we don't know/use the exact reference of the node)
- Insertion 
    - An advantage that Linked Lists have over arrays is that inserting a new element can be performed in `O(1)` time, just by re-assigning the next pointer, even if we insert in the middle.

