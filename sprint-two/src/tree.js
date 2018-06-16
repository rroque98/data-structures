var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {
  addChild: function(value) {
    this.children.push(Tree(value));
  },
  
  contains: function(target) {
    var traverseTree = function(node) {
      if (target === node.value) {
        return true;
      } 
      for (var i = 0; i < node.children.length; i++) {    
        if (traverseTree(node.children[i])) {
          return true;
        }
      }
      return false;
    };
    return traverseTree(this);
  },
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
