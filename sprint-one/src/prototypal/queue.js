var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  someInstance.nextKeyInLine = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },

  dequeue: function() {
    this.nextKeyInLine++;
    var temp = this.storage[this.nextKeyInLine];
    delete this.storage[this.nextKeyInLine];
    return temp;
  },

  size: function() {
    return Object.keys(this.storage).length;
  },
};


