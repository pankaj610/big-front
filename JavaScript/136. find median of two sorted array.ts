
/**
 * @param {number[]} arr1 - sorted integer array
 * @param {number[]} arr2 - sorted integer array
 * @returns {number}
 */
function median(arr1, arr2) {
  // your code here
  let total = arr1.length + arr2.length;
  // find max two number in both array
  let i = 0, j = 0;
  let m = arr1.length, n = arr2.length;
  let mid = Math.floor(total/2);
  if(total%2 == 1) {
    let med = -1;
    for(let k = 0; k <= mid; k++) {
      if(i != m && j != n) {
        med = arr1[i] > arr2[j] ? arr2[j++] : arr1[i++];
      } else if(i < m) {
        med = arr1[i++];
      } else {
        med = arr2[j++];
      }
    }
    return med;
  } else { 
    let n1=-1, n2=-1;
    for(let k = 0; k <= mid; k++) {
      n2 = n1;
      if(i != m && j != n) {
        n1 = arr1[i] > arr2[j] ? arr2[j++] : arr1[i++];
      } else if(i < m) {
        n1 = arr1[i++];
      } else {
        n1 = arr2[j++];
      }
    }
    return (n1 + n2) / 2;
  }
}
