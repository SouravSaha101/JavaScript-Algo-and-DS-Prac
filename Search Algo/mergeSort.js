function merge(arr1, arr2) {
  let res = [];
  let i = 0;
  let j = 0;

  while (arr1.length > i && arr2.length > j) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (arr1.length > i) {
    res.push(arr1[i]);
    i++;
  }
  while (arr2.length > j) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([12, 54, 1, 53, 0, 8, 3]));
