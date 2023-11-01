function myInstanceOf(obj, target) {
  // your code here
  if(!obj || typeof obj != 'object') return false;
  if(!target.prototype) throw Error;
  if(Object.getPrototypeOf(obj) === target.prototype) return true;
  else {
    return myInstanceOf(Object.getPrototypeOf(obj), target);
  }
}
