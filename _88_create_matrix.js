Instructions from your teacher:
Writ a function called createMatrix which takes in two whole numbers, n and m, and creates a two-dimensional array with n columns and m rows. All of the values inside of your array should be 0.

function createMatrix(n, m){

    let newArray = [];

    for (let i = 0; i < m; i += 1) {
        newArray[i] = [];
        for (let j = 0; j < n; j += 1) {
            newArray[i][j] = 0;
        }
    }
    return newArray;
}

console.log(createMatrix(2, 2)); // [[0,0],[0,0]]
console.log(createMatrix(3, 2)); // [[0,0,0],[0,0,0]]
console.log(createMatrix(3, 4)); // [[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
console.log(createMatrix(5, 4)); // [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
