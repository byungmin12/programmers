/** * @param {number} n * @return {number[]} */var countBits = function(n) {    let result = [0]    for(let i = 1 ; i<= n ; i++){        result.push(i.toString(2).replaceAll("0","").length)    }    return result};