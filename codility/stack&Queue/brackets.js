function solution(S) {    if(S.length===0)return 1    const stack = [S[0]]    const closeBrackets = {        "]" : "[",        ")": "(",        "}" : "{"    }    for(let i=1; i<S.length; i++){        stack.push(S[i])        const lastLength = stack.length -1        const last = stack[lastLength]        const secLast = stack[lastLength-1]        if(closeBrackets[last]){            if(closeBrackets[last] !== secLast){                return 0            }else{                stack.pop()                stack.pop()            }        }    }    return stack.length > 0 ? 0 : 1}