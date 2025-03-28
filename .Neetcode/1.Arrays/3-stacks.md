# Stacks

A stack is a data structure that supports a subset of operations from a dynamic array. With a stack you may only add and delete elements from one end of the array (referred to as the top of the stack).

In the physical world, a stack can be conceptualized by thinking of a stack of plates. You may grab a plate from the top or you may add a plate to the top. You cannot remove or add a plate to the middle of the stack. This is the same as the stack data structure.

Stacks are a dynamic data structure that operate on a LIFO (Last In First Out) manner. The last element added to the stack is the first element that comes out. The stack supports three operations - `push`, `pop`, `peek`.

## Push

The **push** operation adds an element to the top of the stack, which in dynamic array terms would be appending an element to the end. This is an efficient O(1)O(1) operation as discussed in the previous lesson.

It helps to visualize a stack as an array that is vertical. The pseudocode demonstrates the concept, along with the visual where we add the integers 11 through 44 to the top. The top pointer updates to point at the last item added. The following pseudocode and visual demonstrates this.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
// using the pushback function from dynamic arrays to add to the stack
push(n) {
    this.stack.push(n);
}
```

Copy

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/0e9488cb-496d-4e28-f395-83ae1f02c300/sharpen=1)

> In many languages there is no built-in stack data structure, but you can use a dynamic array to simulate a stack.

> Since a stack will remove elements in the reverse order that they were inserted in, it can be used to reverse sequences - such as a string, which is just a sequence of characters.

## Pop

The **pop** operation removes the last element from top of the stack, which in dynamic array terms would be reading and removing the last element. This is also an efficient O(1)O(1) operation as discussed previously.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
pop() {
    return this.stack.pop();
}
```

Copy

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/a4640d1e-c45e-4c36-7b3f-ae7e43cce000/sharpen=1)

> In most languages, before popping, it is a good measure to check if the stack is empty to avoid errors.

## Peek

The **peek** operation is the simplest. It simply returns, the top element without removing it. This is also an efficient O(1)O(1) operation.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
peek() {
    return this.stack[this.stack.length - 1];
}
```

Copy

## Time Complexity

|Operation|Big-O Time Complexity|Notes|
|---|---|---|
|Push|O(1)O(1)||
|Pop|O(1)O(1)*|Check if the stack is empty first|
|Peek / Top|O(1)O(1)*|Retrieves without removing|