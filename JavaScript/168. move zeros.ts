
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {Array<any>} list
 * @returns {void}
 */
function moveZeros(list) {
  // your code here
  for(let i = 0; i < list.length; i++) {
    if(list[i] == 0) {
      let j = i+1;
      while(j < list.length && list[j] == 0) {
        j++;
      }
      if(j != list.length) {
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
      } else {
        break;
      }
    }
  }
  return list;
}

