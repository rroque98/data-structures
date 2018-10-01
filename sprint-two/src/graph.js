

// Instantiate a new graph
var Graph = function() {
  this.adjacencyList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.adjacencyList[node] = [];
  // add dat node
  // we want to add the passed in node as a key
  // value should be its neighbors
  // if there are no other keys, value should be empty array
  // Consider randomly assiging that node to a neighbor.
  // example
    // if you pass in 1 --> number
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.adjacencyList[node.toString()] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  
  var edges = this.adjacencyList[node.toString()];
  if (edges.length) {
    for (var i = 0; i < edges.length; i++) {
      // remove edge from each of the 
      this.removeEdge(edges[i], node)
    }
  }
  delete this.adjacencyList[node.toString()];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {   
  return _.contains(this.adjacencyList[fromNode.toString()], toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.adjacencyList[fromNode.toString()].push(toNode);
  this.adjacencyList[toNode.toString()].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var edgesFrom = this.adjacencyList[fromNode.toString()]; 
  var edgesTo = this.adjacencyList[toNode.toString()]; // fromNode array containing toNode
  edgesFrom.splice(edgesFrom.indexOf(toNode), 1); // removes toNode from the fromNode array 
  edgesTo.splice(edgesTo.indexOf(fromNode), 1); // removes toNode from the fromNode array 

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  debugger
  for (var key in this.adjacencyList) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


