var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)

inputs.shift()
const commands = [...inputs].map(command=>command.split(" "))


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

}

const deque = new Deque()

const result = []
commands.forEach(command => {
    const [operator, value]= command
    switch (operator) {
        case "push_front" :
            deque.pushFront(value)
            break
        case "push_back" :
            deque.pushBack(value)
            break
        case "pop_front" :
            result.push(deque.popFront())
            break
        case "pop_back" :
            result.push(deque.popBack())
            break
        case "size" :
            result.push(deque.getSize())
            break
        case "empty" :
            result.push(deque.isEmpty())
            break
        case "front" :
            result.push(deque.getHead())
            break
        case "back" :
            result.push(deque.getTail())
            break
    }
})

console.log(result.join("\n"))