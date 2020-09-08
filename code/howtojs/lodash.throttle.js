function myThrottle(fn, interval) {
  let callable = true;
  let _to;

  return function(...args) {
    if (callable) {
      callable = false;
      const context = this;
      fn.apply(context, args);  
      _to = setTimeout(function() {
        callable = true;
      }, interval);
    }
  }
}