/** * @param {string} s * @return {string[]} */var restoreIpAddresses = function(s) {    // dfs 풀이    // let result = []    //    // const isValid = (str) => {    //     if(Number(str) > 255 || str.length ===0 )return false    //     if(str.length >= 2 && str[0] === "0")return false    //     return true    // }    //    // const dfs = (temp,subStr) => {    //     if(temp.length === 3){    //         if(isValid(subStr))result.push([...temp,subStr])    //         return    //     }    //    //     for(let i = 1; i < 4; i++) {    //         let newSubStr = subStr.slice(0, i);    //         if(!isValid(newSubStr)) continue;    //         dfs([...temp, newSubStr], subStr.slice(i));    //     }    // }    //    // dfs([],s)    // return result.map((r)=>r.join("."))    //backtracking    const result = []    const backtracking = (str, temp , result) => {        if(temp.length ===4 && str.length ===0 ){            result.push([...temp].join("."));            return        }        for(let i =1; i<4; i++){            if(str.length < i) continue;            const subStr = str.slice(0,i)            if ((subStr.length > 1 && subStr[0] === '0') || Number(subStr) > 255) continue;            temp.push(subStr)            backtracking(str.slice(i), temp, result)            temp.pop()        }    }    backtracking(s,[],result)    return result};