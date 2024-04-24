var fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const splitStr = process.platform === "linux" ? "\n" : "\r";

var inputs = fs.readFileSync(filepath, "utf8").toString().trim().split(splitStr)

const length = inputs.shift()
const commands = [...inputs]

class Queue {
    constructor() {
        this.items = [];
        this.pointer = 0;
        this.size = 0;
    }

    enqueue(element) {
        this.size++
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return -1
        this.pointer++
        this.size--
        return this.items[this.pointer - 1]
    }

    front() {
        if (this.isEmpty()) return -1
        return this.items[this.pointer];
    }

    back() {
        if (this.isEmpty()) return -1
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return !this.getSize() ? 1 : 0;
    }

    getSize() {
        return this.size;
    }

}

const queue = new Queue()
const result = []
commands.forEach(command=>{
    const [operator, value] = command.split(" ")
    switch (operator) {
        case "push" :
            queue.enqueue(value)
            break
        case "pop" :
             result.push(queue.pop())
            break

        case "size" :
             result.push(queue.getSize())
            break

        case "empty" :
             result.push(queue.isEmpty())
            break

        case "front" :
             result.push(queue.front())
            break

        case "back" :
             result.push(queue.back())
            break

    }
})

console.log(result.join("\n"))
