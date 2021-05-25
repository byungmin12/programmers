// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

function solution(participant, completion) {
    var answer = '';
    
    let obj = participant.reduce((acc,cur)=>{
        acc[cur] = (acc[cur]) ? acc[cur]+1 : 1
        return acc
    },{})

    for(let com of completion){
        if(obj[com]){
            obj[com] = obj[com] -1 
        }
        if(obj[com]===0){
            delete obj[com]
        }
    }


    return Object.keys(obj)[0]
}


// 이걸보며 느낀점 ... 
// 문제를 넘 어렵게만 생각하지 말자 쉽게 생각해보자 ..
function solution(participant, completion) {
 

    participant.sort();
    completion.sort();

    for(let i in participant) {  //배열인데 for in을 돌리면 값이 나오는게 아닌 인덱스값이 나온다 
        if(participant[i] !== completion[i]) return participant[i];
    }
}