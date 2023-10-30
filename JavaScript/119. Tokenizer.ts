function* tokenize(str) {
  let num = "";
  for(let i = 0; i < str.length; i++) {
    if(isNaN(str[i]) || str[i] == ' ') {
      if(num != '') {
        yield num;
        num = '';
      }
      if(str[i] !== ' ') {
        yield str[i];
      }
    } else {
      num+= str[i];
    }
    
  }
  if(num != '') {
    yield num;
  }
}


---- Best Solution ----
function* tokenize(str) {
  let matches = str.match(/(\d+)|[\+\-\*\(\)\/]/g);
  for(match of matches) {
    yield match;
  }
}

  
