
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

----- DP Approach ------
function countPalindromicSubstr(str) {
  // your code here
  let len = str.length;
  let count = 0;
  let dp = Array(len).fill(false).map(e => Array(len).fill(false));
  for(let i = 0; i < len; i++) {
    for(let j = 0; j <= i; j++) { // LOWER MATRIX
      if(str[i] === str[j]) {  
          if(i - j <= 1 || dp[i-1][j+1]) {
            count++;
            dp[i][j] = true;
          }
      }
    }
  }
  return count;
}
