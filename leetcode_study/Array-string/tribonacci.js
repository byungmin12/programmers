/** * @param {number} n * @return {number} */var tribonacci = function(n) {    let memo = {        "0" : 0,        "1" : 1,        "2" : 1    }    const recursive = (n) => {        if(memo[n] !== undefined)return memo[n]        let result = recursive(n-3) + recursive(n-2) + recursive(n-1)        memo[n] = result        return memo[n]    }    return recursive(n)};//줄바꿈 문제 테스트//줄바꿈 문제 테스트