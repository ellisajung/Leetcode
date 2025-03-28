# Doubly Linked Lists

Having learned about singly linked lists, let’s next learn about its variation - the **Doubly Linked List**. As the name implies, each node now has two pointers. In addition to the `next` pointer, we have a `prev` pointer which points to the previous node. If the `prev` pointer points to `null`, it is an indication that we are at the head of the linked list.

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/0d62c9ac-6724-4aa7-e04b-49831a3a5800/sharpen=6)

---

## Operations of a Doubly Linked Lists

### Insertion End

Similar to the singly linked list, adding a node to a doubly linked list will run in O(1)O(1) time. Only this time, we have to update the `prev` pointer as well.

For example, if we have three nodes in our linked list, `ListNode1`, `ListNode2` and `ListNode3`. Now we have another node, `ListNode4`, that we wish to insert at the end. We will have to update both the `next` pointer of `ListNode3` and the `prev` pointer of `ListNode4`.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
tail.next = ListNode4;
ListNode4.prev = tail;
tail = tail.next;
```

Copy

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/64a757a6-4dd0-4ea0-2f25-e57b2cab0c00/sharpen=1)

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/dc183286-3867-4dbf-4dee-e6f71854c900/sharpen=1)

### Insertion Front (Animation)

### Deletion End

Deleting at the end is also a O(1)O(1) operation.

1. First we get a reference to the node before the tail.
2. We update the `next` pointer of the node before the tail to `null`.
3. We update the tail to be the node before the tail.
4. (Optional) We can also update the `prev` pointer of the old tail to `null`.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
ListNode2 = tail.prev;
ListNode2.next = null;
tail = ListNode2;
```

Copy

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/dcae4bac-10c1-41a1-04d5-b2dc84c8ae00/sharpen=1)

> Since we can insert and remove from the end in O(1)O(1) time, in theory, we could implement a stack with a linked list instead of an array. This is less common, but it is a possibility.

### Deletion Front (Animation)

### Access

Similar to singly linked lists, we cannot randomly access a node. So in the worst case, we will have to traverse nn nodes before reaching the desired node. This would run in O(n)O(n) time.

Doubly linked lists have the benefit that we can traverse the list in both directions, as opposed to singly linked lists.

---

## Closing Notes

|Operation|Big-O Time Complexity|Notes|
|---|---|---|
|Access|O(n)O(n)||
|Search|O(n)O(n)||
|Insertion|O(1)O(1)*|Assuming you have the reference to the node at the desired position|
|Deletion|O(1)O(1)*|Assuming you have the reference to the node at the desired position|