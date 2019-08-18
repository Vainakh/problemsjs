
function makeXOGrid(rows, amount){
    let finalArr = [];
    let startWithX = true;

    for (let i = 0; i < rows; i += 1){
        let newRow = [];

        for (let j = 0; j < amount; j += 1){
          if(startWithX){
              newRow.push("X");
          }
          else {
              newRow.push("O");
          }
          startWithX = !startWithX;
      }
    
