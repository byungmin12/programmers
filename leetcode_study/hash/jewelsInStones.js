/** * @param {string} jewels * @param {string} stones * @return {number} */var numJewelsInStones = function(jewels, stones) {    const hash = jewels.split("").reduce((acc,cur)=>{        acc[cur] = true        return acc    },{})    return stones.split("").reduce((acc,cur)=>{        return hash[cur] ? acc + 1 : acc    },0)};