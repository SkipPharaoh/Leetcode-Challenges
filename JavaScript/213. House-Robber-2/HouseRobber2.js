```
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 3:

Input: nums = [1,2,3]
Output: 3

```

// 1st Method // incomplete
var rob = function(nums) {
    let max = helper(0, nums.length - 1);
    let prevMax = helper(1, nums.length - 1);
    return Math.max(nums[0], max, prevMax);

    function helper(start, end) {
        if (start > end) return 0;
        if (start === end) return nums[start];
        let max = 0;
        for (let i = start; i <= end; i++) {
            max = Math.max(max, nums[i] + helper(i + 2, end));
        }
        return max;
    }
};

// 2nd Method //

function rob(nums) {
    if (nums.length == 0)
        return 0;

    if (nums.length == 1)
        return nums[0];

    var max1 = rob_simple(nums, 0, nums.length - 2);
    var max2 = rob_simple(nums, 1, nums.length - 1);

    return Math.max(max1, max2);
}

function rob_simple(nums,start,end) {
    var t1 = 0;
    var t2 = 0;

    for (var i = start; i <= end; i++) {
        var temp = t1;
        var current = nums[i];
        t1 = Math.max(current + t2, t1);
        t2 = temp;
    }

    return t1;
}
