function charCount(str){
  let obj = {};

  for (let i = 0; i < str.length; i += 1){
    let char = str[i].toLowerCase();
    if(/[a-z0-9]/.test(char)){
      if(obj[char] > 0){
        obj[char] += 1;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}


function charCount(str){
  let obj = {};

  for (let char of str){
      char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)){
      if(obj[char] > 0){
        obj[char] += 1;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

charCount("Hello hi")
