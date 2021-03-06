```
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

```

// 1st Method //
var reverseString = function(s) {
    if (s.length > 0 ){
        return s.reverse()
    }
}

// 2nd Method //
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
}

// 3rd Method //
const reverseStrings = (s) => {
    let answer = ""
    for (let i = s.length-1; i >=0; i--) {
        answer += s[i]
    }
    answer = answer.toLowerCase()
    return answer
}