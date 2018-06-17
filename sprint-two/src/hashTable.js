

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    this._storage.set(index, [[k, v]]);
  } else {
    for (let i = 0; i < bucket.length; i++) {
      if (k === bucket[i][0]){
        bucket[i][1] = v;
      } else {
        bucket.push([k, v]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  debugger;
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (k === this._storage.get(index)[i][0]) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) { 
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]){
      bucket[i][1] = undefined;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


