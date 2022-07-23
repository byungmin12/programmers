// 724. Find Pivot Index
// Easy

// 3989

// 448

// Add to List

// Share
// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// Constraints:

// 1 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 첫번째와 나머지를 다 더한값이 같으면 0 리턴
  // 왼쪽과 오른쪽 같이 같지 않으면 -1 리턴
  // 왼쪽과 오른쪽이 같아지면 그 인덱스 리턴

  //     for(let i =0, length = nums.length;  i< length ; i++){
  //         let right = nums.slice(i+1).reduce((acc,cur)=>acc+cur,0)
  //         let left = nums.slice(0, i).reduce((acc,cur)=>acc+cur,0)

  //         if(right === 0 && i === 0){
  //             return 0
  //         }

  //         if(right === left){
  //             return i
  //         }

  //     }
  //     return -1

  let sum = nums.reduce((acc, cur) => acc + cur, 0),
    leftSum = 0;

  for (let i = 0, length = nums.length; i < length; i++) {
    if (leftSum === sum - leftSum - nums[i]) return i;
    leftSum = leftSum + nums[i];
  }

  return -1;
};
