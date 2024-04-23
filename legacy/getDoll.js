// [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
// [1,5,3,5,1,2,1,4]
// 첫 점수 81점
function solution(board, moves) {
    //moves의 값이 1이면 board의 모든 배열의 1번째 요소를 돌면서 0이면 다음 배열로 숫자면 스택에 넣어주기
    let basket = []
    let count = 0
    while(moves.length!==0){
        let check = moves.shift()

        for(let i=0; i<board.length; i++){
            if(board[i][check-1]!==0){
                basket.push(board[i][check-1]);
                board[i][check-1]=0
                break;
            }

        }
        if(basket[basket.length-1]===basket[basket.length-2]&& basket[basket.length-2] !== undefined){
            basket.pop()
            basket.pop()
            count ++
        }

    }
    

    return count*2
}