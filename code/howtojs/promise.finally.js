Promise.prototype.myFinally = function(cb) {
  return this.then((res) => {
    return Promise.resolve(cb()).then(() => res);
  }).catch((err) => {
    return Promise.resolve(cb()).then(() => {throw err});
  });
}

Promise.resolve(1)
.then((res) => {
  console.log("res", res);
})
.catch((err) => {
  console.log("err", err);
})
.myFinally(() => {
  console.log('finally');
})
