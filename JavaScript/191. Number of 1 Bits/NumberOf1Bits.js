var hammingWeight = function(n) {
    let count = 0
    let num = n.toString(2)
    for (let i = 0; i< num.length+1; i++){
        if (num[i] === '1') {
            count += 1
        }
    }
    return count
    
};