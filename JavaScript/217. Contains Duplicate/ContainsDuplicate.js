```
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
```
// 1st Method //
var containsDuplicate = function(nums) {
    // loop to run through all nums
    for (let i=0; i < nums.length; i++) {
        // conditional to check if one number matchs another number
        for (let y= i + 1 ; y < nums.length; y++) {
            if (nums[i] === nums[y]) {
                return true;
            }
        }
    }
    return false;
}

// 2nd Method //
const containsDuplicates = (nums) => {
    const uniqueSet = [... new Set(nums)]
    if (uniqueSet.length === nums.length) {
        return false
    }
    else if ( uniqueSet.length !== nums.length) {
        return true
    }
}

// 3rd Method //
const duplicates = (lst1, lst2) => {
    const resultArr = [...lst1, ...lst2]
    let result = []
    for (let i in resultArr) {
        if (result.indexOf(resultArr[i]) === -1) {
            result.push(resultArr[i])
        }
    }
    console.log(resultArr)
}

let nums = [1,2,3,1]
containsDuplicate([1,2,3,1])
containsDuplicate([1,2,3,4])
containsDuplicate([1,1,1,3,3,4,3,2,4,2])