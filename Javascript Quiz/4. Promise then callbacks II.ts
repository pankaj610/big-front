
Promise.resolve(1)
.then((val) => {
  console.log(val) // 1
  return val + 1 // 2
}).then((val) => { // 2
  console.log(val) // 2, 
  // return undefined
}).then((val) => { // undefined
  console.log(val)
  return Promise.resolve(3)
    .then((val) => {
      console.log(val)
      // return undefined
    })
}).then((val) => {
  console.log(val) // undefined
  return Promise.reject(4)
}).catch((val) => {
  console.log(val) // 4
}).finally((val) => {
  console.log(val) // undefined
  return 10
}).then((val) => {
  console.log(val) // undefined
})

---- Output ----

1
2
undefined
3
undefined
4
undefined
undefined
