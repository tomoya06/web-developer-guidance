class SimplePromise {
  state = "PENDING";
  value = undefined;
  error = undefined;

  resolveCallbacks = [];
  rejectCallbacks = [];

  constructor(fn) {
    fn(this.resolver.bind(this), this.rejector.bind(this));
  }

  resolver(value) {
    this.state = 'RESOLVED';
    this.value = value;
    this.resolveCallbacks.forEach(cb => {
      cb(value);
    })
  }

  rejector(error) {
    this.state = 'REJECTED';
    this.error = error;
    this.rejectCallbacks.forEach(cb => {
      cb(error);
    })
  }

  then(cb) {
    if (this.state === 'PENDING') {
      this.resolveCallbacks.push(cb);
    } else if (this.state === 'RESOLVED') {
      cb(this.value);
    }
    return this;
  }

  catch(cb) {
    if (this.state === 'PENDING') {
      this.rejectCallbacks.push(cb);
    } else if (this.state === 'REJECTED') {
      cb(this.error);
    }
    return this;
  }
}

new SimplePromise((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
  }, 1000);
}).then((val) => {
  console.log(val);
}).catch((err) => {
  console.error(err);
})