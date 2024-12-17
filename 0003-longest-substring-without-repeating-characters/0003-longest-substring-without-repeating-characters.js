/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let answer = 0;
    let start = 0;
    let seen = new Map();
    
    for(let end = 0; end < s.length; end++) {
      if(seen.has(s[end]) && seen.get(s[end]) >= start){
        start = seen.get(s[end]) + 1;   
      }
        seen.set(s[end],end);
        answer = Math.max(answer, end - start + 1);
    }
    return answer;
};