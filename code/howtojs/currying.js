// HOW TO PROGRAM multiFn(2)(3)(4) = 24

// 1. universal currified function. limit args length
function curry(fn, args = []) {
  const length = fn.length; // visit https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length
  return function() {
    const newArgs = args.concat([...arguments]);
    if (newArgs.length < length) {
      return curry.call(this, fn, newArgs);
    } else {
      return fn.apply(this, newArgs);
    }
  }
}

function ogMulti(a, b, c) {
  return a * b * c;
}

const multiFn = curry(ogMulti);
console.log(multiFn(2, 3, 4));
console.log(multiFn(2)(3, 4));
console.log(multiFn(2)(3)(4));

// 2. spesific curry version for this question
function multiFnCurry() {
  const args = [...arguments];
  const fn = function() {
    const newArgs = args.concat([...arguments]);
    return multiFnCurry.apply(this, newArgs);
  }

  fn.toString = function() {
    return args.reduce((a, b) => a * b);
  }

  return fn;
}

console.log(multiFnCurry(1,2)(3));
console.log(multiFnCurry(1,2)(3)(4)(5));
