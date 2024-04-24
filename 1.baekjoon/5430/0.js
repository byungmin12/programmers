var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)

const length = inputs.shift()


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
        this.tail =null
        this.size = 0
        this.isLeft = true
    }

    push(value) {
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            this.tail.next = node
            node.prev = this.tail
        }

        this.tail = node
        this.size++
    }

    getSize(){return this.size}

    isEmpty(){return this.size === 0}
    printForward(){
        const result = []
        let cur = this.head

        while(cur){
            result.push(cur.data)
            cur = cur.next
        }
        return result
    }

    printBackward(){
        const result = []
        let cur = this.tail

        while(cur){
            result.push(cur.data)
            cur = cur.prev
        }
        return result
    }

    print(){
        return this.isLeft ? this.printForward() : this.printBackward()
    }

    reset(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    shift(){
            this.head = this.head.next
            this.head.prev = null
            this.size--
    }

    pop(){
            this.tail = this.tail.prev
            this.tail.next = null
            this.size--
    }

    remove() {
        if(this.isEmpty())return -1
        if(this.getSize() ===1){
            this.reset()
        }else if(this.isLeft){
            this.shift()
        }else{
            this.pop()
        }
    }

    reverse() {
        this.isLeft = !this.isLeft
    }
}





for(let i =0; i<inputs.length; i = i+3){
    let isResultError = false
    const commands =inputs[i]
    const deque = new Deque()
    const arr = JSON.parse(inputs[i+2])
    for(let i =0; i< arr.length; i++){
        deque.push(arr[i])
    }

    for(let i=0; i<commands.length; i++){
        const command = commands[i]
        if(command === "R")deque.reverse()
        if(command === "D"){
            const isError = deque.remove()
            if(isError === -1){
                console.log("error")
                isResultError = true
                break
            }
        }
    }

if(!isResultError)console.log(`[${deque.print().toString().trim()}]`)

}