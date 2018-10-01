var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail) {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
   } else {
    list.head = Node(value);
    list.tail = list.head;
     }
  };

  list.removeHead = function() {
    if (list.head) {
      var temp = list.head.value;
      list.head = list.head.next;
    }
    return temp;
  };

  list.contains = function(target) {
    let current = list.head
    while (true) {
      if (current.value === target) {
        return true;
      }
      if ( current.next === null) {
        return false;
      }
      current = current.next;
    } 
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
