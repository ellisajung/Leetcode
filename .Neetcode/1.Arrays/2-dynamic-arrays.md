# Dynamic Arrays

Dynamic Arrays are a much more common alternative to static arrays. They are useful because they can grow as elements are added. In JavaScript and Python, these are the default arrays.

Unlike static arrays, with dynamic arrays we don’t have to specify a size upon initialization.

In different languages, dynamic arrays may be assigned a default size - Java being 1010 and C# being 44. Regardless, these are automatically resized at runtime as the arrays grow.

## Dynamic Array Insertion

When inserting at the end of a dynamic array, the next empty space is found and the element is inserted there. Consider an array of size 33 where we push elements into it until we run out of space.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
// Insert n in the last position of the array
pushback(n) {
    if (this.length == this.capacity) {
        this.resize();
    }

    // insert at next empty position
    this.arr[this.length] = n;
    this.length++;
}
```

Copy

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/824e8bac-c064-4597-5d67-23c4d15f0900/sharpen=1)

## Resize

Since the array is dynamic in size, we can continue to add elements. But it's not magic, this is achieved by copying over the values to a new static array that is double the size of the original. This means that the resulting array will be of size 66 and will have new space allocated for it in memory. The following visual and code demonstrates this resize operation.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
resize() {
    // Create new array of double capacity
    this.capacity = 2 * this.capacity;
    const newArr = new Array(this.capacity); 
    
    // Copy elements to newArr
    for (let i = 0; i < this.length; i++) {
        newArr[i] = this.arr[i];
    }
    this.arr = newArr;
}
```

Copy

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/806bc423-9672-4c40-3f1a-3a27a7aef400/sharpen=1)

> When all the elements from the first array have been copied over, the first static array will be deallocated.

Adding elements to a dynamic array runs in O(1)O(1) _**amortized**_ time.

Amortized time complexity is the average time taken per operation over a sequence of operations. The resize operation itself is O(n)O(n), but since it is not performed every time we add an element, the average time taken per operation is O(1)O(1). But this is only the case if we double the size of the array when we run out of space.

### Why double the capacity?

The visual below shows a resulting array of size 88. Now imagine that we wanted to dynamically fill it up and we started with a size 11 array. We would add 55, double the space to add 66, double that space to add 77 and 88, double that space to add 99, 1010, 1111 and 1212.

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/93d1f86f-ac47-469e-b2f7-9dd14435a300/sharpen=1)

The size of the above array went from `1 -> 2 -> 4 -> 8`.

To analyze the time complexity we have to take into consideration the _**sum of all the operations**_ that occured before the last one since we would not have gotten to the resulting array without these operations. To achieve an array of size 88, we would have to perform 1+2+4+8=151+2+4+8=15 operations, which includes the resize operations.

The pattern here is that the last term (the dominating term) is always greater than or equal to the sum of all the terms before it. In this case, 1+2+4=71+2+4=7, and 7<87<8. Add in the 88 to the 77, we get a total of 1515 operations to create the resulting array of size 88.

Generally, the formula is that for any array size nn, it will take at most 2n2n operations to create, which would belong to O(n)O(n).

Since inserting `n` elements into a dynamic array is O(n)O(n), the amortized time complexity of inserting a single element is O(1)O(1).

> With time complexity, we are concerned with asymptotic analysis. This means we care about how quickly the runtime grows as the input size grows. We don't distinguish between O(2n)O(2n) and O(n)O(n) because the runtime grows linearly with the input size, even if the constant is doubled.  
> With time complexity analysis, we typically drop constant terms and coefficients.

### Other Operations

Inserting or removing from the middle of a dynamic array would be similar to a static array. We would have to shift elements to the right or left to make space for the new element or to fill the gap left by the removed element. This would run in O(n)O(n) time.

---

## Time Complexity

|Operation|Big-O Time|Notes|
|---|---|---|
|Access|O(1)O(1)||
|Insertion|O(1)∗O(1)∗|O(n)O(n) if insertion in the middle since shifting will be required|
|Deletion|O(1)∗O(1)∗|O(n)O(n) if deletion in the middle since shifting will be required|