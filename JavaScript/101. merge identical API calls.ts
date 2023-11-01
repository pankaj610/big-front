

/**
 * @param {(path: string, config: any) => Promise<any>} getAPI
 * @returns {(path: string, config: any) => Promise<any> & {clearCache: () => void}}
 */

function getKey(path, config) {
  let keys = Object.keys(config);
  keys.sort((a, b) => a.localeCompare(b));
  let str = path;
  keys.forEach(key => {
    str+= (key + config[key]);
  })
  return str;
}

function createGetAPIWithMerging(getAPI) {
  let cache = new Map();
  let q = [];
  
  let fun =  (path, config) => {
    let key = getKey(path, config);
    if(cache.has(key)) {
      q.push(key);
      if(q.length > 5) q.shift();
      return cache.get(key);
    } else {
      try {
        let resp = getAPI.call(this, path, config);
        cache.set(key, resp);
        setTimeout(()=> {
          cache.delete(key);
        }, 1000);
        
        return resp;
      } catch(e) {
        throw e;
      }
    }
  }
  fun.clearCache = ()=> {
    cache.clear();
  }
  return fun;
}


