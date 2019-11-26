Instructions from your teacher:
Write a function called unzip, which accepts an array of grouped elements and returns a new an array, which regroups the elements to their pre-zip configuration.

function unzip(array){

    let newarray = [];

    for (let row = 0; row < array.length/2; row += 1) {
        for (let col = 0; col <= array.length; col += 1) {
            for (let ele = 0; ele < array.length; ele += 1) {
                let subarray = [];

                if( array[row].length > 1){

                    subarray.push(array[ele][col]);


                } else {
                    let flatarray = array.reduce((acc, val) => acc.concat(val), []);
                    newarray = [flatarray];
                    break;
                }
                newarray.push(subarray);
            }

        }
    }
    let  reducedarray = newarray.reduce((acc, val) => acc.concat(val), []);
    let filteredarray = reducedarray.filter(function (element) {
        return element !== undefined;
    });


    let finalarray = [];

    for (let i = 0; i < filteredarray.length; i += 2) {
        if(reducedarray.length > 4){
       finalarray.push([filteredarray[i], filteredarray[i + 1]])
    } else {
        return [filteredarray];
    }
}

        return finalarray;
}


console.log(unzip([[1, 2], [3, 4]]));
// [[1,3],[2,4]]

console.log(unzip([['a', 1, true], ['b', 2, false]]));
// [['a', 'b'], [1, 2], [true, false]]

console.log(unzip([['a'], ['b'], ['c']]));
//[['a','b','c']]
