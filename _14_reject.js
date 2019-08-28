function reject(array, cb){
    const newArr = [];

    for (let i = 0; i < array.length; i += 1){
        currentEl = array[i];

        if (cb(currentEl) === true){
            continue;
        } else {
            newArr.push(currentEl);
        }
        }
        return newArr;
    }

    console.log(reject([1, 2, 3, 4], function (val) {
        return val > 2;
    })); // [1,2]

    console.log(reject([2, 3, 4, 5], function (val) {
        return val % 2 === 0;
    })); // [3,5]
