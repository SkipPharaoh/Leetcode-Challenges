```
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```

// 1st Method // 72ms 45.2mb
var search = (nums, target) => {
    if ((nums.find(el => el === target)) === undefined) {
        return -1
    } else {
        return nums.indexOf(target)
    }
}

// 2nd Method // 79ms 47.7mb
var searchs = (nums, target) => {
    let result = -1
    for (let i in nums) {
        if (nums[i] === target) {
            result = i
        }
    }
    return result
}