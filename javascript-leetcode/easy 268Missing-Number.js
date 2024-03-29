/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // const newSet = new Set(nums)
  // for (let index = 0; index <= newSet.size; index++) {
  //   if (!newSet.has(index)) return index
  // }
}

const nums1 = [3, 0, 1] // 2
const nums2 = [0, 1] // 2
const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1] // 8

console.log(missingNumber(nums1))
console.log(missingNumber(nums2))
console.log(missingNumber(nums3))

/********************************************************************************
*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
*
*********************************************************************************/

/********************************************************************************
*
          解法 2 : index 相加再減去 arrayNumbers 相加就是缺少的那個數字

  let indexSum = 0
  let numsSum = 0
  for (let index = 0; index <= nums.length; index++) {
    numsSum += nums[index] || 0
    indexSum += index
  }
  return indexSum - numsSum
*
*********************************************************************************/