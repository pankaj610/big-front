
/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(a, b) {
  // your code here
  if(a !== b) { // NaN != NaN true
    return b !== b;
  }
  if(a === 0 && b === 0) {
    return 1 / a === 1 / b;
  }
  return a === b;
}
