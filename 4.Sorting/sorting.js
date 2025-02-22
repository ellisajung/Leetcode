/* 
Sorting

Types of Sorting
    공통 메인 아이디어: to break the problem into a sub-problems => "divide & conquer"

    1. 삽입 정렬 (Insertion Sort)
        - 상대적으로 가장 비효율적
        - sub-problem: to sort the first two element
        - stable sorting algorithm
        - TC: O(n^2)
    
    2. 병합 정렬 (Merge Sort)
        - 가장 흔히 쓰임
        - sub-problem: to split the main array into two approximately equal halves,
                       until the sub-arrays hit a size of one.
        - two-branch algorithm 
        - stable sorting algorithm
        - TC: O(nlogn)
    
    3. 퀵 정렬 (Quick Sort)
        - 병합 정렬이랑 같이 가장 많이 쓰임
        - "Partition" 알고리즘 
        - Pivot value (마지막 요소)
        - Two pointers 
            - l: index we want to set the next value
            - r: index that are currently searching
        - r이 피벗 전 값을 가리킬 때까지 배열을 순회하며,
        - 인덱스 r 값이 피벗 값보다 작거나 같을 경우, l 값과 r 값을 "스와이핑" 
        -     "               클 경우, 그냥 r++
        - 결과적으로 피벗 값보다 작은 값들은 피벗 왼쪽에, 큰 값들은 오른쪽에 배치되게 됨
        - 피벗을 왼쪽 값으로 옮겨가며 반복
        - unstable sorting algorithm
        - TC: O(n^2) (in average, O(nlogn) ->삽입 정렬보다 나음)
            - 마지막 요소의 값이 중간 정도의 값일 경우, merge sort처럼 깊이가 logn인 것처럼 착각할 수 있으나
            - 이미 정렬된 배열의 경우 깊이는 n이 된다.
            - 최악의 경우를 피하기 위해, pivot 값을 선정하는 로직을 추가하기도 함
            - 예를 들어, 배열의 l, m, r 인덱스의 값을 비교하여 중간 값을 pivot 값으로 정하기도 함
        - SC: O(1)
            - merge sort에 비해 갖는 장점
    
    4. 버킷 정렬 (Bucket Sort)
        - 요소가 특정 범위라는 제약이 있는 특수한 경우에만 사용 (쓸 일 거의 없음)
        - unstable sorting algorithm -> 기존 값 overriding 해서 사용하지도 않음...
        - stable하게 구현하려면 할 수는 있음. (예를 들어, 배열에 요소 개수 대신 linked-list 저장)

    (참고) 개념적으로 빅오 표기법은 최악의 경우를 가정하는 것이지만, 
          일반적으로는 빅오 표기법이더라도 평균적인 경우로 표기함

*/

/* 1. Insertion Sort */
// TC: O(n^2)
// SC: O(1)
function insertionSort(arr) {
  // i: 포인터
  // j: 비교하는 요소의 인덱스
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0 && arr[j + 1] < arr[j]) {
      // 스와핑 알고리즘
      let tmp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = tmp;
      j--;
    }
  }
  return arr;
}

/* 2. Merge Sort */
// TC: O(nlogn)
// SC: O(n)
function mergeSort(arr, l, r) {
  if (l < r) {
    // Find the middle point of arr
    let m = Math.floor((l + r) / 2);

    // Recursive case
    // 베이스 케이스에 도달할 때까지 반으로 나눔
    mergeSort(arr, l, m); // divide the left half
    mergeSort(arr, m + 1, r); // divide the right half

    // sort and merge halves
    // 콜 스택의 가장 상단에 있는 길이 2의 sub-array부터 호출됨
    merge(arr, l, m, r);
  }

  // Base case
  // r - l <= 0
  // starting index = ending index (sub-array of size 1)
  return arr;
}

// Sorts & Merges two sub-arrays of parent arr
// First subarray: arr[l..m]
// Second subarray: arr[m+1..r]
function merge(arr, l, m, r) {
  // Create temp arrays of two sub-arrays:
  // 재귀적으로 divide할 때,
  // 배열을 생성하면서 나누는 게 아니라 단순히 인덱스만 전달하기 때문에
  // arr를 직접 수정하며 기존 데이터를 덮어쓸 위험을 피하기 위해
  // left, right half 배열 생성 (인덱스도 각각 0에서 시작)

  //   // 방법 1 (neetcode)
  //   let length1 = m - l + 1; // l ~ m
  //   let length2 = r - m; // m+1 ~ r

  //   /*
  //     Array() constructor:
  //         - can be called both with or without "new"
  //         - 전달한 인자를 요소로 하는 배열 생성
  //         - 단, 전달하는 인자가 1개이고 숫자일 경우, 해당하는 숫자를 길이로 하는 빈 슬롯 배열 생성
  //             - ex) Array(5) => [<5 empty items>]
  //   */
  //   let L = new Array(length1);
  //   let R = new Array(length2);

  //   // Copy the sorted left & right halves to temp arrays
  //   for (let i = 0; i < length1; i++) {
  //     L[i] = arr[l + i];
  //   }

  //   for (let j = 0; j < length2; j++) {
  //     R[j] = arr[m + 1 + j];
  //   }

  // 방법 2 (내피셜) -> 얕은 복사해도 괜찮은건가..?
  let L = arr.slice(l, m + 1); // l ~ m
  let R = arr.slice(m + 1, r + 1); // m+1 ~ r

  // Sorting divided arrays: Three pointers
  let i = 0; // initial index for L
  let j = 0; // initial index for R
  let k = l; // Initial index of merged subarray array (index of the next element we want to insert)

  // Merge the two sorted halves leto the original array
  let lenL = m - l + 1;
  let lenR = r - m;

  while (i < lenL && j < lenR) {
    if (L[i] <= R[j]) {
      // 같은 경우도 포함 ->stable sorting algorithm
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // One of the halves will have elements remaining
  // 남는 요소는 이미 정렬된 상태일 것이므로 그대로 붙이기만 하면됨

  // L 요소가 남는 경우
  while (i < lenL) {
    arr[k] = L[i];
    i++;
    k++;
  }
  // R 요소가 남는 경우
  while (j < lenR) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

/* 3. Quick Sort */
// TC: O(nlogn) (worst case, O(n^2))
// SC: O(1)
function quickSort(arr, s, e) {
  if (e - s + 1 <= 1) {
    return arr;
  }

  let pivot = arr[e];
  let left = s; // pointer for left side

  // Partition: elements smaller than pivot on left side
  for (let i = s; i < e; i++) {
    if (arr[i] < pivot) {
      let tmp = arr[left];
      arr[left] = arr[i];
      arr[i] = tmp;
      left++;
    }
  }

  // Move pivot in-between left & right sides
  arr[e] = arr[left];
  arr[left] = pivot;

  // Quick sort left side
  quickSort(arr, s, left - 1);

  // Quick sort right side
  quickSort(arr, left + 1, e);

  return arr;
}

/* 4. Bucket Sort */
// TC: O(n)
// SC: O(1) -> 요소의 범위가 존재하므로
function bucketSort(arr) {
  // Assuming arr only contains 0, 1 or 2
  const counts = [0, 0, 0];

  // Count the quantity of each val in arr
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] += 1;
  }

  // Fill each bucket in the original array

  //   let i = 0;
  //   for (let n = 0; n < counts.length; n++) {
  //     for (let j = 0; j < counts[n]; j++) {
  //       arr[i] = n;
  //       i++;
  //     }
  //   }

  let i = 0;
  for (let j = 0; j < counts.length; j++) {
    while (counts[j] > 0) {
      arr[i] = j;
      counts[j]--;
      i++;
    }
  }

  return arr;
}
