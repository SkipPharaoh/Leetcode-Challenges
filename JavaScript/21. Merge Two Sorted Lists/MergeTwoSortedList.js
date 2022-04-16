```
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 
```

// 1st Method //
var mergeTwoLists = (list1, list2) => {
    let sortedArr = [list1, list2]
    return sortedArr.sort((a, b) => a - b)
}

// 2nd Method //
var mergeTwoList = (list1, list2) => {
    let sortedArr = (list1 + list2).split(",")
    for (let i in sortedArr) {
        sortedArr[i] = parseInt(sortedArr[i])
    }
    return sortedArr.sort((a, b) => a - b)
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/


// 3rd Method // 
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}