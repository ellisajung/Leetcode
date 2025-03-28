# Static Arrays

In statically typed languages like Java, C++ and C#, arrays have to have an allocated _size and type_ when initialized. These are known as **static arrays**.

They are called static because the size of the array cannot change once declared. And once the array is full, it can _not_ store additional elements. Some dynamically typed languages such as Python and JavaScript do not have static arrays to begin with. They have an alternative, which we will discuss in the next lesson.

Let's cover the key operations of an array, and the time complexity associated with each.

## Reading from an array

To read an individual element from an array we can choose the position we want to access via an **index**. Below we have initialized an array of size `3` called `myArray`. We also attempt to access an arbitrary element using the index `i`.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
// initialize myArray
let myArray = [1, 3, 5];

// access an arbitrary element, where i is the index of the desired value
myArray[i];
```

Copy

![reading-from-array](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/d993dba7-19fa-4dae-748b-1a7a1d9e0900/sharpen=1)

Accessing a single element in an array is always instant because each index of `myArray` is mapped to an address in the RAM. Regardless of the size of the input array, the time taken to access a single element is the same. We refer to this operation as O(1)O(1) in terms of time complexity.

> There is a common confusion that O(1)O(1) is always fast. This is not the case. There could be 10001000 operations and the time complexity could still be O(1)O(1). If the number of operations does not grow as the size of the data or input grows then it is O(1)O(1).

### Traversing through an array

We can also read all values within an array by traversing through it. Below are examples of how we could traverse `myArray` from the start to the end using loops.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// OR

let i = 0;
while (i < myArray.length) {
  console.log(myArray[i]);
  i++;
}
```

Copy

> The last element in an array is always at index n−1n−1 where nn is the size of the array. If the size of our array is 33, the last accessible index is 22.

To traverse through an array of size nn the time complexity is O(n)O(n). This means the number of operations grows linearly with the size of the array.

For example, with an array of size `10` we would have to perform `10` operations to traverse through it, with an array of size `100` we would have to perform `100` operations, and so on.

---

## Deleting from an array

### Deleting from the end of the array

In statically typed languages, all array indices are filled with `0s` or some default value upon initialization, denoting an empty array.

When we want to remove an element from the **last index** of an array, setting its value to `0` / `null` or `-1` is the best we can do. This is known as a **soft delete**. The element is not being "deleted" per se, but it is being overwritten by a value that denotes an empty index. We will also reduce the length by `1` since we have one less element in the array after deletion. The code below demonstrates the concept using `[4, 5, 6]` as an example.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
// Remove from the last position in the array if the array
// is not empty (i.e. length is non-zero).
removeEnd(arr, length) {
    if (length > 0) {
        // Overwrite last element with some default value.
        // We would also consider the length to be decreased by 1.
        arr[length - 1] = 0;
        length--;
    }
}
```

Copy

![deletion-at-end](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/abf96287-60e4-460a-b480-04804743ae00/sharpen=1)

> 66 is deleted/overwritten by either 00 or −1−1 to denote that it does not exist anymore. Length is also decremented by 11.

### Deleting at an `ith` index

If instead of deleting at the end, we wanted to delete an element at a random index `i`. Would we be able to perform this in O(1)O(1)?

We could naively just replace it with a `0`, but this would break the contiguous nature of our array. Notice that deleting from the end of an array doesn't make it non-contigious, but deleting from the middle will.

A better approach would be the following:

1. We are given the deletion index `i`.
2. We iterate starting from `i + 1` until the end of the array.
3. We shift each element `1` position to the left.
4. (Optional) We replace the last element with a `0` or `null` to mark it empty, and decrement the length by `1`.

The following code demonstrates this operation.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
// Remove value at index i before shifting elements to the left.
// Assuming i is a valid index.
removeMiddle(arr, i, length) {
    // Shift starting from i + 1 to end.
    for (let index = i + 1; index < length; index++) {
        arr[index - 1] = arr[index];
    }
    // No need to 'remove' arr[i], since we already shifted
}
```

Copy

![removal-0th-index](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/c548890a-6c61-4359-c96a-c04073291300/sharpen=1)

> The worst case would be that we need to shift **all** of the elements to the left. This would occur if the target index is the first index of the array. Therefore, the code above is O(n)O(n).

## Insertion

### Inserting at the end

If we want to insert an element at the end of the array, we can simply insert it at the next open position which will be at index `length` where `length` is the number of elements in the array.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
// Insert n into arr at the next open position.
// Length is the number of 'real' values in arr, and capacity
// is the size (aka memory allocated for the fixed size array).
insertEnd(arr, n, length,  capacity) {
    if (length < capacity) {
        arr[length] = n;
    }
}
```

Copy

> Since we are writing a single value to the array, the time complexity is O(1)O(1).

Note: `length` is the number of elements inside the array whereas `capacity` refers to the maximum number of elements the array can hold.

### Inserting at the `ith` index

Inserting at an arbitrary index `i` is more involved since we may insert in the middle of the array.

Consider the array `[4, 5, 6]`. If we need to insert at index `i = 1`, or `i = 0`, we cannot overwrite the original value because we would lose it. Instead, we will need to shift all values, starting at index `i`, one position to the right. Below is the code and visual demonstrating this.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
// Insert n into index i after shifting elements to the right.
// Assuming i is a valid index and arr is not full.
insertMiddle(arr, i, n, length) {
    // Shift starting from the end to i.
    for (let index = length - 1; index > i - 1; index--) {
        arr[index + 1] = arr[index];
    }
    //Insert at i
    arr[i] = n;
}
```

Copy

The below image visualizes the insertion of `8` at index `1` in the array `[4, 5, 6]`. Since we don't have enough space to keep the last element `6`, it is lost.

![insertion-at-i](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/50e76532-cea7-4680-1cde-0e4756477800/sharpen=1)

> The visual above demonstrates that shifting occurs prior to insertion to ensure values are not overwritten.

## Time Complexity

|Operation|Big-O Time|Notes|
|---|---|---|
|Reading|O(1)O(1)||
|Insertion|O(n)O(n)*|If inserting at the end of the array, O(1)O(1)|
|Deletion|O(n)O(n)*|If deleting at the end of the array, O(1)O(1)|

## Closing Notes

The operations we discussed above are _absolutely critical_ for solving a lot of interview problems. In fact, the key to solving many problems is being able to implement the insert middle and delete middle operations efficiently.

There are some suggested problems listed above. If you are a beginner you may find them challenging. That's completely okay, your goal should be to understand the concepts and the operations we discussed above. The solution code and video explanation are provided for each problem.