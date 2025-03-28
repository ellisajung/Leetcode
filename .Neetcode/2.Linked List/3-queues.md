# Queues

Another data structure that overlaps with arrays is a **Queue**. They are also similar to stacks, except they follow a **FIFO** approach (First in First Out).

A real world example would be a line at the bank. The first person added to the line (queue) is the first person to be served.

---

## Implementation and Operations

The easiest way to implement a queue is using a linked list.

> It is also possible to implement a queue using a dynamic array, but is more involved. To get the same time complexity as a linked list, you would need to use a circular array and perform some additional operations.

The main two operations that queues support are `enqueue` and `dequeue`.

### Enqueue

The **enqueue** operation inserts an element to the end of the queue. If we implement this operation with a singly linked list it runs in O(1)O(1) time.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
enqueue(val) {
    const newNode = new ListNode(val);

    if (this.right != null) {  
    // Queue is not empty 
        this.right.next = newNode;
        this.right = this.right.next;
    } else {       
    // Queue is empty             
        this.left = newNode;
        this.right = newNode;
    }
}
```

Copy

![alt image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/3c1a4770-61d3-454d-8e48-18e6d8a70800/sharpen=1)

### Dequeue

The **dequeue** operation removes an element from the front of the queue and returns that element.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
dequeue() {
    if (this.left == null) {
    // Queue is empty 
        return;
    }
    // Remove left node and return value
    const val = this.left.val;
    this.left = this.left.next;
    if (!this.left) {
        this.right = null;
    }
    return val;    
}
```

Copy

![alt image](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/856f3974-9e69-4783-8186-467c0b25b300/sharpen=1)

Similar to stacks, it is a good measure to check if the queue is empty before performing the dequeue opeartion.

There is also a variation of the queue, a double-ended queue, known as a **deque** (pronounced "deck"). A deque allows you to add and remove elements from both the head and the tail in O(1)O(1) time.

One of the most important use cases for the queue is when performing breadth-first search for trees and graphs, which we will cover later in the course.

---

## Time Complexity

|Operation|Big-O Time Complexity|
|---|---|
|Enqueue|O(1)O(1)|
|Dequeue|O(1)O(1)|