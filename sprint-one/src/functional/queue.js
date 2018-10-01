var Queue = function() {
  var someInstance = {};
  var count = 0;
  var nextKeyInLine = 0;

  var storage = {};

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    nextKeyInLine++;
    var temp = storage[nextKeyInLine];
    delete storage[nextKeyInLine];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
