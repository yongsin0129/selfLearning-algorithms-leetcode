/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let total = 0

  const binarySearch = (arr) => {
    let left = 0
    let right = arr.length

    while (left < right) {
      let mid = Math.floor((left + right) / 2)
      if (arr[mid] >= 0) left = mid + 1
      else right = mid
    }
    return arr.slice(left).length
  }

  for (let i = 0; i < grid.length; i++) {
    total += binarySearch(grid[i])
  }

  return total
}

/********************************************************************************
*
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100
 

Follow up: Could you find an O(n + m) solution?

var countNegatives = function (grid) {
  const height = grid.length
  const width = grid[0].length
  let r = height - 1
  let c = 0
  let res = 0
  while (r >= 0 && c < width) {
    if (grid[r][c] >= 0) {
      c++
    } else {
      res += width - c
      r--
    }
  }
  return res

  r = 4 - 1 = 3
  c = 0
  res = 0
  [-1,-1,-2,-3] | r=3
  [ 1, 1,-1,-2] | r=2
  [ 3, 2, 1,-1] | r=1
  [ 4, 3, 2,-1] | r=0

  c=0 c=1 c=2 c=3

}

*
*********************************************************************************/