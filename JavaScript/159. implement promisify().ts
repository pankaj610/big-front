

/**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */
function promisify(func) {
  // your code here
  return function(...args) { 
    return new Promise((resolve, reject)=> {
        func.apply(this, [...args, (error, data)=> {
          if(error) {
            reject(error);
          } else {
            resolve(data);
          }
        }])
    })
  }
}
