console.log('script start')

setTimeout(() => {
  console.log('timeout1')
  new Promise(resolve => {
    console.log('timeout promise');
  }).then(() => {
    console.log('timeout then1');
  }).then(() => {
    console.log('timeout then2');
  })
}, 0);

async function async1() {
  await async2();
  console.log('async1');
}

async function async2() {
  await async3()
  console.log('async2');
}

async function async3() {
  console.log('async3');
}

async1();

setTimeout(() => {
  console.log('timeout2');
}, 0);

new Promise(resolve => {
  console.log('promise');
  resolve();
}).then(() => {
  console.log('then1');
}).then(() => {
  console.log('then2');
})

console.log('script end')

