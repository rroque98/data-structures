var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 1;
  return someInstance;
};

var stackMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  pop: function() {
    var temp = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return temp;
  },
};


