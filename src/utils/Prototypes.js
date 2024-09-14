// add is empty to array
Array.prototype.isEmpty = function() {
  return this.length === 0;
};

Array.prototype.distinct = function() {
  distinctArray = [...new Set(this)];
};
