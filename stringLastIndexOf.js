function stringLastIndexOf(word, character){
  for (let i = word.length - 1; i >= 0; i -= 1){
    if(word[i] === character){
      return i;
    }
  }
  return -1;
}
