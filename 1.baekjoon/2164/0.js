var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)

const N = Number(inputs[0])

const queue = Array.from({length: N}).map((_,index)=>index+1)

let type = true

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0;
    }

    append(data) {
        const node = new Node(data)

        if(!this.head){
            this.head = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node

        this.size++
    }

    printForward (){
        let cur = this.head
        while (cur){
            console.log(cur.data)
            cur = cur.next
        }
    }

    printBackward() {
        let cur = this.tail
        while(cur){
            console.log(cur.data)
            cur = cur.prev;
        }
    }

    getHead () {
        return this.head.data
    }

    removeHead() {
        this.head = this.head.next
        this.head.prev = null
        this.size--
    }

    getSize() {return this.size}
}

const cards = new LinkedList()

queue.forEach(que=> cards.append(que))

while(cards.getSize() !== 1){
    cards.removeHead()
    cards.append(cards.getHead())
    cards.removeHead()
}

console.log(cards.getHead())