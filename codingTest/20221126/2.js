function solution(id_list, k) {    //물건 구매 고객은 하루 최대 한장 쿠폰    // 한명 당 최대 k장    // 고객들에게 지급된 쿠폰 장수    let db = {}    let coupons = 0    id_list.forEach((list)=>{        //당일 구매 체크        let buyList = {}        list.split(" ").forEach((id)=>{            if(!buyList[id]){                if(!db[id]){                    //없는 경우                    db[id] = 1                    coupons++                }else{                    //db에 존재하는 경우                    db[id]++                    //사용자가 가진 갯수가 k보다 적어야함                    if(db[id]<=k){                        coupons++                    }                }            }            buyList[id] = true        })    })    return coupons}