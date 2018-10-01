var Set = function() {
  var set = Object.create(Set.prototype);
  set._storage = []; // fix me
  return set;
};



Set.prototype.add = function(item) {
  this._storage.push(item);
  this.storage = _.uniq(this._storage);
  return this._storage;
};

Set.prototype.contains = function(item) {
  for (let i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

Set.prototype.remove = function(item) {
  for (let i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return this._storage.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 linear O(n)
 */
