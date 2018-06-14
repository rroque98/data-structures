class Queue {
  constructor() {
    this.count = 0;
    this.nextKeyInLine = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.count++;
    this.storage[this.count] = value;
  }

  dequeue() {
    this.nextKeyInLine++;
    var temp = this.storage[this.nextKeyInLine];
    delete this.storage[this.nextKeyInLine];
    return temp;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
