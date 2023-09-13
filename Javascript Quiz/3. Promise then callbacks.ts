Promise.resolve(1)
.then(() => 2)
.then(3)
.then((value) => value * 3)
.then(Promise.resolve(4))
.then(console.log)

--- Output ----

6


If it is not a function, it is internally replaced with an identity function ((x) => x) which simply passes the fulfillment value forward.
