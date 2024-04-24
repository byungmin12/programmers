var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)

const [n, cnt] = inputs.shift().split(" ").map((num)=>Number(num))
const numbers = inputs[0].split(" ").map((num)=>Number(num))


class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class Deque {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0;
    }

    pushFront(data) {
        const node = new Node(data)

        if(!this.head && !this.tail){
            this.tail = node
            this.head = node;
            this.tail.prev = node
            this.head.next = node
        }else{
            this.head.prev = node
            node.next = this.head;
        }
        this.head = node;
        this.size++
    }

    pushBack(data) {
        const node = new Node(data)

        if(!this.head && !this.tail){
            this.head = node;
            this.tail = node
            this.tail.prev = node
            this.head.next = node
        }else{
            this.tail.next = node
            node.prev = this.tail
        }
        this.tail = node
        this.size++

    }

    getHead (){
        if(this.isEmpty())return -1

        return this.head.data
    }

    getTail() {
        if(this.isEmpty())return -1
        return this.tail.data
    }

    popFront() {
        if(this.isEmpty())return -1
        const prevHead = this.head.data
        if(this.getSize() ===1){
            this.reset()
            return prevHead
        }
        this.head = this.head.next
        this.head.prev = null
        this.size--
        return prevHead
    }

    reset(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    popBack() {
        if(this.isEmpty())return -1
        const prevTail = this.tail.data

        if(this.getSize() ===1){
            this.reset()
            return prevTail
        }

        this.tail = this.tail.prev
        this.tail.next = null
        this.size--

        return prevTail
    }

    getSize() {return this.size}

    isEmpty(){return this.getSize() ===0 ? 1 : 0}

    findValue(value) {
        let leftCnt = 0
        let rightCnt =  1
        let leftCur = this.head
        let rightCur = this.tail

        while (leftCur != null){
            if(leftCur.data === value){
                break
            }else{
                leftCur = leftCur.next
                leftCnt++
            }
        }

        while (rightCur != null){
            if(rightCur.data === value){
                break
            }else{
                rightCur = rightCur.prev
                rightCnt++
            }
        }

        return [leftCnt, rightCnt ]

    }

    leftPopRightPush () {
        const pop = this.popFront()
        this.pushBack(pop)
    }

    rightPopLeftPush () {
        const pop = this.popBack()
        this.pushFront(pop)
    }
}

const deque = new Deque()

let  result = 0

for(let i =1 ; i<=n; i++)deque.pushBack(i)


for(let i =0; i<cnt; i++){
    const [left,right] = deque.findValue(numbers[i])
    let cnt = Math.min(left,right)
    let isRight = false
    if(left <= right){
        while(cnt){
            deque.leftPopRightPush()
            cnt--
        }
    }else{
        while(cnt){
            isRight= true
            deque.rightPopLeftPush()
            cnt--
        }
    }
    deque.popFront()
    result = result +Math.min(left,right )
}

console.log(result)
