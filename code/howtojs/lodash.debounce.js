function myDebounce(fn, interval) {
  let _to;
  return function(...args) {
    const context = this;
    if (_to) {
      clearTimeout(_to);
      _to = setTimeout(function() {
        fn.apply(context, args);
      }, interval);
    }
  }
}