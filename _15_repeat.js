function repeat(string, number){
  let newString = '';

  for (let i = 0; i < number; i += 1){
        if (string.length < 0){
          return newString;
        } else {
          newString += string;
      }
    }
    return newString;
  }

  console.log(repeat('Matt', 3)); // 'MattMattMatt'
  console.log(repeat('Elie', 2)); // 'ElieElie'
  console.log(repeat('Michael', 0)); 
