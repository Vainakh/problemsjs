function stringIndexOf(word, character){
  for (let i = 0; i < word.length; i += 1){
    if(word[i] === character){
      return i;
    }
  }
  return -1;
}
