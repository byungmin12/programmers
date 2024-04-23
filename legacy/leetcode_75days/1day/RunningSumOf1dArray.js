// 1480. Running Sum of 1d Array
// Easy

// 3934

// 234

// Add to List

// Share
// Given an array nums. We define tapeEquilibrium.js running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6
// Accepted
// 733,145
// Submissions
// 811,310

var runningSum = function (nums) {
  // let result = [nums[0]]
  // for(let i =1 ,length = nums.length ; i<length ; i++){
  //     const sum = result[i-1] + nums[i]
  //     result = [...result, sum]
  // }
  // return result

  let val = 0;
  let sum = nums.map((res) => {
    return (val = res + val);
  });
  return sum;
};
