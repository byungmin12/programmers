function solution(n, lost, reserve) {
    var answer = 0;
    // 학생 전부가 갖고있따는 전제
    let uniform =  new Array(n).fill(1);


    // 읎어진 수 만큼 빼주기
    for(let i =0 ; i<lost.length; i++){
        uniform[lost[i]-1]--
    }
    // 있는 수만큼 더해주기
    for(let i =0 ; i<reserve.length; i++){
        uniform[reserve[i]-1]++
    }
    // 빌려줄수있어 ? 
    for(let i =0; i<uniform.length; i++){
        if(uniform[i]===0){
            if(uniform[i-1]===2){
                uniform[i-1]--
                uniform[i]++
            } else if(uniform[i+1]===2){
                uniform[i+1]--
                uniform[i]++
            }           
        }
        if(uniform[i]>=1){
            answer++
        }
    }
    return answer
}