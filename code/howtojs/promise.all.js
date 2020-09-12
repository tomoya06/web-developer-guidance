Promise.myall = function(pros) {
  const ress = [];
  let finished = 0;
  return new Promise((resolve, reject) => {
    for (let i=0; i < pros.length; i+=1) {
      pros[i].then((res) => {
        ress[i] = res;
        finished += 1;
        if (finished === pros.length) {
          resolve(ress);
        }
      }).catch((err) => {
        reject(err);
      })
    }
  })
}

Promise.myall([
  Promise.resolve(1),
  Promise.resolve(2),
]).then(res => {
  console.log(res);
}).catch(err => {
  console.error(err);
})
