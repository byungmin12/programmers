// 14. Longest Common Prefix
// Easy

// 9763

// 3298

// Add to List

// Share
// Write tapeEquilibrium.js function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.
// Accepted
// 1.8M
// Submissions
// 4.5M

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  //     let str = ""
  //     let shortestLength = Math.min(...strs.map((el)=>el.length))

  //     if(strs.length ===1)return strs[0]

  //     for(let i =0 ; i<shortestLength; i ++){
  //         let store = [strs[0][i]]
  //         let n= 1
  //         while(n < strs.length){
  //               if(strs[n][i]=== store[store.length -1]){
  //                 store.push(strs[n][i])
  //             }else{
  //                 break
  //             }
  //             n++
  //         }
  //        if(n === strs.length){
  //                 str = str + strs[n-1][i]
  //         }else{
  //             break
  //         }
  //     }
  //   return str

  // 수정한 코드
  let str = "";
  let shortestLength = Math.min(...strs.map((el) => el.length));

  for (let i = 0; i < shortestLength; i++) {
    let n = 1;

    while (n < strs.length) {
      if (strs[n][i] !== strs[n - 1][i]) {
        break;
      }
      n++;
    }
    if (n === strs.length) {
      str = str + strs[n - 1][i];
    } else {
      break;
    }
  }
  return str;
};
