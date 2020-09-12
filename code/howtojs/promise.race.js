Promise.myrace = function(pros) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < pros.length; i += 1) {
      pros[i].then((res) => resolve(res));
    }
  })
}

const delayGenerator = function (delay, res) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, delay * 1000);
  })
}

const delays = '0'.repeat(4).split('').map((val, i) => delayGenerator(i, i));

Promise.myrace(delays).then((res) => {
  console.log(res);
})
