function createNew() {
  let obj = new Object();
  const constructor = [].shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  const result = constructor.call(obj, arguments);
  return typeof result === 'object' ? result : obj; 
}
