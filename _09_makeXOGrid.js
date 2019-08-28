
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
      finalArr.push(newRow);
  }
  return finalArr;
  }


  console.log(makeXOGrid(1, 4));

  /*/
  [["X","O","X","O"]]
  /*/

  console.log(makeXOGrid(3, 2));

  /*/
  [["X","O"],["X","O"],["X","O"]]
  /*/

  console.log(makeXOGrid(3, 3));
  /*/
  [["X","O","X"],["O","X","O"],["X","O","X"]]
  /*/
