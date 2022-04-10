```
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
```

// 1st Method // ~127ms
const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false
    } else {
        const sortedS = s.split("").sort().join("")
        const sortedT = t.split("").sort().join("")
        if (sortedS !== sortedT) {
            return false
        } else {
            return true
        }
    }
}

// 1st Method Refactored // ~185ms
const isAnagrams = (s, t) => {
    if (s.length !== t.length) {
        return false
    } else {
        return s.split("").sort().join("") === t.split("").sort().join("")
    }
}