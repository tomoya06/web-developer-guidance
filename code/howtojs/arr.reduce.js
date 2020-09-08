Array.prototype.myReduce = function(fn, initState) {
  let ret = initState;
  for (let i = 0; i < this.length-1; i += 1) {
    ret = fn(ret, this[i]);
  }
  return ret;
}
