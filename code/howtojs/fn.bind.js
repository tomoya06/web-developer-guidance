Function.prototype.myBind = function(context) {
  const _this = this;
  const args = [...arguments].slice(1);

  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, args.concat(...arguments));
  }
}