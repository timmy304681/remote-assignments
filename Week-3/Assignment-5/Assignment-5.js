/* O(N²), two for-loop, it's so complicated and inefficient
function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log([i, j]);
      }
    }
  }
}
*/

// O(N), it's better than above, from https://leetcode.com/problems/two-sum/discuss/173262/JavaScript-Solution
function twoSum(nums, target) {
  const map = {}; // create an object

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    // if the another value found in the object, it will print the answer
    if (another in map) {
      console.log([map[another], i]);
    }
    map[nums[i]] = i; // save the value and postion in the object
  }
}

/*
    For example:
    twoSum([2, 7, 11, 15], 9);
    Should returns:[0, 1]
    Because:
    nums[0]+nums[1] is 9
   */

twoSum([2, 7, 11, 15], 9);
//twoSum([2, 1, 11, 7], 9);
//twoSum([0, 1, 2, 7], 9);
