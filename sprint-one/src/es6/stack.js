class Stack {
  constructor() {
    this.storage = {};
    this.count = 1;
  }
  size() {
    return Object.keys(this.storage).length;
  }
  push(value) {
    this.count++;
    this.storage[this.count] = value;
  }
  pop() {
    var temp = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return temp;
  }
}