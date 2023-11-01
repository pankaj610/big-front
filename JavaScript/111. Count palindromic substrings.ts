
/**
 * @param {string} str
 * @return {number}
 */
function countPalindromicSubstr(str) {
  // your code here
  let pal = 0;
  for(let i = 0; i < str.length; i++) {
    expand(i, i);
    expand(i, i+1);
  }
  function expand(left, right) {
    while(left >= 0 & right <= str.length) {
      if(str[left] === str[right]) {
        left--;
        right++;
        pal++;
      } else {
        return;
      }
    }
  }
  return pal;
}
