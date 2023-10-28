


type ProduceFunc = <T>(base: T, receipe: (draft: T) => any) => void


const produce: ProduceFunc = (base, recipe) => {
  let copy = JSON.parse(JSON.stringify(base));
  recipe(copy);
  if(compare(base, copy)) {
    return base;
  }
  return copy;
}




function compare(original: any, modified: any): Boolean {
  if(typeof original != typeof modified) {
    return false;
  }
  if(typeof original != 'object') {
    return original === modified;
  }

  
  let isEqual = true;

  for(let key in original) {
    if(compare(original[key], modified[key])) {
      modified[key] = original[key];
    } else {
      isEqual = false;
    }
  }

  return Object.keys(original).length == Object.keys(modified).length && isEqual;
}
