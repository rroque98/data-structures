var Stack = function() {
  var count = 0;
  var someInstance = {};
  var storage = {};

  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    var temp = storage[count - 1];
    delete storage[count - 1];
    storage[count];
    count = count - 1;
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};