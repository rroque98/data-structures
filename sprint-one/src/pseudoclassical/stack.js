var Stack = function() {
  this.storage = {};
  this.count = 1;
};
Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
Stack.prototype.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};
Stack.prototype.pop = function() {
  var temp = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return temp;
};


