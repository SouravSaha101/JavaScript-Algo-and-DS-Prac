function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([12, 23, 24, 1, 24, 9, 0, -1]));
