class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(item) {
    const newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  dequeue() {
    if (!this.head) return;
    const removedItem = this.head.data;
    this.head = this.head.next;
    return removedItem;
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
