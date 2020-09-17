function isObject(obj) {
  return typeof obj === 'function' || typeof obj === 'object' && obj !== null;
}

function isArray(obj) {
  return Array.isArray(obj);
}

function isFunc(obj) {
  return typeof obj === 'function';
}

function deepClone(obj, map = new Map()) {
  if (!isObject(obj)) {
    return obj;
  }

  if (isFunc(obj)) {
    return obj.bind(this);
  }
  
  let res;

  if (isArray(obj)) {
    res = [];
  } else {
    res = {};
  }
  if (map.has(obj)) {
    return map.get(obj);
  }
  map.set(obj, res);

  for (let key in obj) {
    res[key] = deepClone(obj[key], map);
  }
  return res; 
}

const obj = {
  a: 1,
  b: null,
  c: undefined,
  d: function() { console.log('im d'); },
  e: [1,2],
  f: Symbol('123'),
}

obj.myself = obj;

const cpObj = deepClone(obj);
debugger;
