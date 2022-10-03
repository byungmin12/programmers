// 416. Partition Equal Subset Sum// Medium//// 8964//// 150//// Add to List//// Share// Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.////////     Example 1://// Input: nums = [1,5,11,5]// Output: true// Explanation: The array can be partitioned as [1, 5, 5] and [11].//     Example 2://// Input: nums = [1,2,3,5]// Output: false// Explanation: The array cannot be partitioned into equal sum subsets.//////     Constraints://// 1 <= nums.length <= 200// 1 <= nums[i] <= 100// Accepted// 533,601// Submissions// 1,142,854/** * @param {number[]} nums * @return {boolean} */var canPartition = function(nums) {    let sum = nums.reduce((acc,cur)=>acc+cur)    if(sum % 2 !==0 )return false    let half = sum / 2    let dp = []    dp[0] = true    for(let i =0; i<nums.length; i++){        let num = nums[i]        for(let n= half; n >= num; n--){            dp[n] = dp[n] || dp[n - num]            console.log(num,dp)        }    }    return dp[half] === undefined ? false: true};