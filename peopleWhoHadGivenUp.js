function solution(answers) {
    // 각 사람 찍는 방법
      let kim = [1, 2, 3, 4, 5]
      let park = [2, 1, 2, 3, 2, 4, 2, 5]
      let choi = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
      // 정답 카운트
      let check = [0,0,0]
      
      // 카운트 카운트 
      for(let i=0; i<answers.length; i++){
          if(answers[i]===kim[i%5]){
              check[0] ++
          } 
          if(answers[i]===park[i%8]){
              check[1] ++
          }
          if (answers[i]===choi[i%10]){
              check[2] ++
          }
      }
      
    //최대값 찾기
      let max =0
      for(let i =0; i<check.length; i++){
          if(check[i]>max){
              max = check[i]
          }
      }
      
    //최대값이랑 같은 값 넣어주기
      let result = []
      for(let i=0 ; i<check.length; i++){
          if(max === check[i]){
             
              result.push(i+1)
          }
      }
      
      
      return result;
  }