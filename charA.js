function charAt(string, index){

    if (string.length <= index){
    return '';
    } else {
    return string[index];
  }
}

console.log(charAt('awesome', 2)); // 'e'
console.log(charAt('awesome', 12)); // ''
