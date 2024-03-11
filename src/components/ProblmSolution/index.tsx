function findSumedIndex(arr: number[], num: number) {
  var result = [];
  // Loop through the array by steps of 2
  for (var i = 0; i < arr.length - 1; i++) {
    // sum
    let sumNum = arr[i] + arr[i + 1];
    // find index number
    if (sumNum === num) {
      result.push(i);
    }
  }
  return result;
}
// Example usage
const sigNum = 7;
const arry = [1, 2, 3, 4, 5, 2];
const result = findSumedIndex(arry, sigNum);
console.log(result);

// [ 2, 4 ]
