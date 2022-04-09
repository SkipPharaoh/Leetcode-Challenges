```
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
```

// 1st Method //
const twoSum = (nums, target) => {
    let output = []
    for (let i =0; i < nums.length; i++) {
        for ( let y=0; y < nums.length; y++) {
            if (nums[i] + nums[y] === target) {
              if (i != y) {
                return [i, y]
              }
            }
        }
    }
  // console.log(Object.keys(output))
}

// 2nd Method //
const twoSums = (nums, target) => {
    let output = []
    for (let i = 0; i < nums.length; i++) {
        let y = nums.indexOf(target - nums[i])
        if (y !== -1 && y !== i) {
            return [i, y]
        }
    }
}