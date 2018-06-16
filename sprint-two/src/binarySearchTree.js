var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.left = {};
  newTree.right = {};
   // fix me
  _.extend(newTree, binaryTreeMethods);

  return newTree;
};

var binaryTreeMethods = {
  insert: function(value) {
    var addDat = function (node) {
      if (value > node.value && !Object.keys(node.right).length) {
        node.right = BinarySearchTree(value);
        return;
      } else if (value < node.value && !Object.keys(node.left).length) {
        node.left = BinarySearchTree(value);
        return;
      } else if (value > node.value) {
        node = node.right;
        return addDat(node);
      } else if (value < node.value) {
        node = node.left;
        return addDat(node);
      }
    };
    return addDat(this);
  },
  
  contains: function(target) {


    var traverseTree = function(node) {
      if (target === node.value) {
        return true;
        let currentNode;
      } else if (target > node.value) {
        currentNode = node.right;
        if (currentNode === undefined) {
          return false;
        }
        return traverseTree(currentNode);
      } else if (target < node.value || node.value === undefined) {
        currentNode = node.left;
        if (currentNode === undefined) {
          return false;
        }
        return traverseTree(currentNode);
      } 
    };
    return traverseTree(this);
  },
  
  depthFirstLog: function(iterator) {
    debugger;
    var changeDat = function(node) {
      iterator(node.value);
      let currentNode;
      if (!Object.keys(node.right).length) {
        currentNode = node.right;
      }
      if (!Object.keys(node.left).length) {
        currentNode = node.left;
      }
      changeDat(currentNode);
    };
    changeDat(this);
    //   iterator(node.value);
    //   // if (node.left.value = undefined && node.right.value) {
    //   //   return;
    //   // }
    //   if (node.left === undefined) {
    //     changeDat(node.right);
    //   }
    //   changeDat(node.left);
    // };
    // changeDat(this);
  },
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
