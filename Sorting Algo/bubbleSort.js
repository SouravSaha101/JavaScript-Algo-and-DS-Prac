function bubbleSort(arr) {
  let noSwap; // noSwap checks if the array is already sorted or not, if it is then no more iterations is done
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([1, 6, 2, 7, 53, 314, 1, 9, 214]));
