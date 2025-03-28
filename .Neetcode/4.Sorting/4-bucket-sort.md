# Bucket Sort

By now, you are probably getting tired of sorting. Don't worry, this is the last sorting algorithm we will cover, and it is a pretty important one. It is not as popular or widely used as the previous algorithms we have covered. Bucket sort works well when the dataset to be sorted has values **within a specific range**.

## Concept

Imagine we have an array of size 66 and it contains values of an inclusive range of 0−20−2. The idea behind bucket sort is to create a "bucket" for each one of the numbers and map them to their respective buckets.

There will be a bucket for 00, 11 and 22. This bucket, which is just a position in a specified array will contain the frequencies of each one of the values within the range. For the sake of this example, we only have three values and accordingly we will have three buckets.

> The term bucket will really just translate into a position in an array where we will map these frequencies.

Once each one of the buckets is filled with the frequency of each one of the values, we will overwrite all the values in the original array such that they end up in the sorted order.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
function bucketSort(arr) {
    // Assuming arr only contains 0, 1 or 2
    const counts = [0, 0, 0];

    // Count the quantity of each val in arr
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]] += 1;
    }

    // Fill each bucket in the original array
    let i = 0;
    for (let n = 0; n < counts.length; n++) {
        for (let j = 0; j < counts[n]; j++) {
            arr[i] = n;
            i++;
        }
    }
    return arr;
}
```

Copy

The first part of the pseudocode, right before we do `i = 0`, corresponds to filling up each one of the buckets. Let's explain the second part of the code a bit more.

- Python
- Java
- C++
- JavaScript
- C#
- Swift

```javascript
let i = 0;
for (let n = 0; n < counts.length; n++) {
    for (let j = 0; j < counts[n]; j++) {
        arr[i] = n;
        i++;
    }
}
```

Copy

- The `i` pointer will keep track of the next insertion position for our original array, `arr`.
- The `n` pointer keeps track of the current position of the `counts` array.
- The `j` pointer keeps track of the number of times that `counts[n]` has appeared.

So, knowing that, we have our `counts` array which is `[2,1,3]`. And, our original input array is `[2,1,2,0,0,2]`.

At the first iteration, n=0n=0, which corresponds to 22 in `counts`. Our inner loop will run two times, overwriting `arr[0]` and `arr[1]` to be `0`. This makes perfect sense because we had two zeros and putting them in `arr` in an adjacent manner will result in them being sorted. This process will continue for each number and the ultimate state of `arr` will be `[0,0,1,2,2,2]` which is the ultimate goal.

![alt text](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/1521e7e2-4f63-4326-38cd-f32bcd9d3400/sharpen=1)

---

## Time Complexity

You may be looking at the nested for loop and immediately going, that is O(n2)O(n2). That is not quite right. Let's do some analysis. We know that for the first for loop, we are performing nn steps since we are going through all the elements and counting frequency.

The first for loop will run nn times where nn is the length of the `counts` array. However, the inner loop will only run until `counts[n]`, which is a different everytime. The first time it will be 22, then 11 and then 33. Therefore, our algorithm belongs belongs to O(n)O(n).

> It should be noted that nested for loops don't always mean a time complexity of O(n2)O(n2). As we saw saw above, it is important to analyze how many times the inner for loop executes on each outer for loop iteration. More information on this can be found in the lessons section for Big-O Notation.

## Stability

Since we are overwriting the original array, there is no way to preserve the relative order of the values. There is no swapping that takes place either. Hence, it will stay unstable.

## Closing Notes

So while the bucket sort algorithm runs in O(n)O(n) time, we must remember that it will only work if the dataset is within a specified range.

Generally, with algorithmic problems, the safest bet is making use of merge sort, or quick sort.

|Algorithm|Big-O Time Complexity|Note|
|---|---|---|
|Insertion Sort|O(n2)O(n2)*|If fully, or nearly sorted, O(n)O(n)|
|Merge Sort|O(n log n)O(n log n)||
|Quick Sort|O(n log n)O(n log n)*|In worst case it is O(n2)O(n2)|
|Bucket Sort|O(n)O(n)*|Assuming all values in the input are in a specified range.|