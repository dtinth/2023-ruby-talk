class Queue {
  constructor() {
    this.data = [];
  }
  enqueue(item) {
    this.data.push(item);
  }
  dequeue() {
    return this.data.shift();
  }
}

const q = new Queue();
const n = 100000;

console.time("enqueue");
for (let i = 1; i <= n; i++) {
  q.enqueue(i);
}
console.timeEnd("enqueue");

console.time("dequeue");
for (let i = 1; i <= n; i++) {
  q.dequeue();
}
console.timeEnd("dequeue");
