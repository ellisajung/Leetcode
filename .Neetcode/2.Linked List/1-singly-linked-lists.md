# Linked Lists

A linked list is another data structure that is like an array in the sense that it stores elements in an ordered sequence. But there are also some key differences.

The main difference is that linked lists are made up of objects called `ListNode`'s. This object contains two attributes:

1. `value` - This stores the value of the node. It could be a character, an integer, etc.
2. `next` - This stores the reference to the next node in the linked list. The picture below visualizes the `ListNode` object. This will make more sense a little later on.

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/3616591d-ee13-4a1a-19c6-e5fb58952900/sharpen=6)

---

## Creating a Linked List from scratch

By chaining these `ListNode` objects together we can build a **linked list**. We start with a `ListNode` class:

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

Copy

Using the `next` pointer of each, we can connect the nodes together. Suppose that we have three `ListNode` objects – `ListNode1`, `ListNode2`, `ListNode3`.

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/9b99c7c9-8b41-44e1-b011-e3f2ce633100/sharpen=1)  
In this case, our value attribute is a string - red, blue, green.

> When we instantiate a list node, we don't know where it is stored in memory. The nodes likely won't be contiguous like arrays, but that isn't an issue for linked lists. The visual below gives a glimpse of how the nodes would be stored in memory.

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/dd67e09c-4525-4ad1-67ac-b4fcb3ed0200/sharpen=1)

Next, we would need to make sure that our next pointers point to another `ListNode`, and not `null`. Only the last node in the linked list would have its `next` pointer point to `null`.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
ListNode1.next = ListNode2;
```

Copy

> The address for `ListNode2` is retrieved from memory.

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/eb8c55ba-5519-4f0c-9cc1-01e5a5069e00/sharpen=1)

`ListNode1`’s next pointer points to `ListNode2`. Next, we set the `next` pointer for `ListNode2` and `ListNode3`.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
ListNode2.next = ListNode3;
ListNode3.next = null;
```

Copy

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/0e925c41-0ca5-4e0e-7ba6-4aa2b07b2c00/sharpen=1)

---

## Traversal

To traverse a linked list from beginning to end, we can just make use of a simple while loop.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
let cur = ListNode1;
while (cur) {
    cur = cur.next;
}
```

Copy

1. We start the traversal at the **head** of the list, which is `ListNode1`.
    
2. We assign it to a variable `cur`, denoting the current node we are at.
    
3. We execute the `while` loop until we reach the end of the list which is `null`.
    
4. In each iteration, we update `cur` to be the next node in the list by setting `cur = cur.next`.
    
5. The traversal runs in O(n)O(n) time where nn is the number of nodes in the linked list.
    

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/7a1a5bd7-3d4c-47c2-1281-8da922820700/sharpen=1)

### Circular Linked List

An interesting scenario presents itself if `ListNode3`’s next pointer is set to `ListNode1` instead of `null`. This results in a **circular linked list**.

Attempting to iterate through a circular linked list would result in an infinite loop. We would never reach the end of the linked list.

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/b4016449-c305-4684-f861-0074a0695800/sharpen=1)

---

## Operations of a Singly Linked List

Linked Lists have a `head`, and a `tail` pointer. The `head` pointer points to the very first node in the linked list, `ListNode1`, and the `tail` pointer points to the very last node — `ListNode3`. If there is only one node in the Linked List, the `head` and the `tail` point to the same node.

### Appending

An advantage that Linked Lists have over arrays is that inserting a new element can be performed in O(1)O(1) time, even if we insert in the middle.

We do not have to shift any elements since there is no requirement for the elements to be stored contiguously in memory.

> This assumes we already have a reference to the node at the desired position we want to insert. If we have to traverse the list to arrive at the insertion point, the operation would take O(n)O(n) time.

If we wanted to append a `ListNode4` to the end of the list, we would be appending to the tail. Once `ListNode4` is appended, we update our tail pointer to be at `ListNode4`. This operation would be done in O(1)O(1) time since it is only one operation. The steps would look like the following, with code.

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/e4dd25e2-2cdb-4b02-2019-1cd6e4aab900/sharpen=1)

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
tail.next = ListNode4;
```

Copy

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/aee8a013-fe18-4b31-8c37-770b2f265c00/sharpen=1)

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
tail = ListNode4;
```

Copy

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/27e84eeb-dd25-4cf9-dd30-9574f7a5f100/sharpen=1)

### Deleting from a Singly Linked List

Deleting a node from a singly linked list will take O(1)O(1) since we can accomplish this by updating a single pointer.

> This assumes we already have a reference to the node at the desired position we want to delete. If we have to traverse the list to arrive at the deletion point, the operation would take O(n)O(n) time.

Suppose we want to delete `ListNode2`. Currently, our `head` points to `ListNode1`, and `head.next` points to `ListNode2`. We can update our `head.next` pointer to `ListNode3`, which can be accessed by chaining `next` pointers like `head.next.next`. This makes sense since `head.next` is `ListNode2`, and logically, `head.next.next` would be `ListNode3`.

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/adfeff07-5e43-4fbb-d4d9-a89d48f43300/sharpen=1)

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
head.next = head.next.next;
```

Copy

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/4b5e968e-42c7-40aa-a7b9-dfeec8d7f700/sharpen=1)

Updated linked list after deletion of `ListNode2`. Notice that now `ListNode1`’s next pointer points to `ListNode3`, instead of `ListNode2`

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/4b012cbc-c13e-436a-e7be-b3116525b800/sharpen=1)

> It can be assumed that the memory occupied by `ListNode2` will be cleared via garbage collection in most lanugages. In other languages like C, you would have to manually free the memory.

---

## Time Complexity

|Operation|Big-O Time Complexity|Note|
|---|---|---|
|Access|O(n)O(n)||
|Search|O(n)O(n)||
|Insertion|O(1)O(1)*|Assuming you already have a reference to the node at the desired position|
|Deletion|O(1)O(1)*|Assuming you already have a reference to the node at the desired position|