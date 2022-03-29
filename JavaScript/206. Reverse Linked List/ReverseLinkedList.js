```
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```;

// 1st Method //
var reverseList = function(head) {
    let reverseArr = head.reverse()
    return reverseArr
};

// 2nd Method //
var reverseList = function(head) {
    let num = 0
    let reverseArr
    while (num < head.length) {
        reverseArr.push(head.pop(-1));
    }
    return reverseArr
};

// 3rd Method //
var reverseList = function (head) {
  if (head == null) {
    return null;
  }
  if (head.next === null) {
    return head;
  }

  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
};

reverseList([1, 2, 3, 4, 5]);
reverseList([1, 2]);
reverseList([]);
