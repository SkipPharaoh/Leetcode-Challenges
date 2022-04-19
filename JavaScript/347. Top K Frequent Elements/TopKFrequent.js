```
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
```;

var topKFrequent = (nums, k) => {
  let map = {};
  for (let i of nums) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      map[i] += 1;
    }
  }
  let objArr = Object.keys(map).sort((a, b) => map[b] - map[a]);
  return objArr.slice(0, k).map((i) => Number(i));
};
