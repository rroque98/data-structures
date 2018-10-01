var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  Object.assign(someInstance, stackMethods);
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