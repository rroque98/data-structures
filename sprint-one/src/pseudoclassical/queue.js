var Queue = function() {
  this.count = 0;
  this.nextKeyInLine = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Queue.prototype.dequeue = function() {
  this.nextKeyInLine++;
  var temp = this.storage[this.nextKeyInLine];
  delete this.storage[this.nextKeyInLine];
  return temp;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


