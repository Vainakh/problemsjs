function map(array, cb){
    newArray = [];

    for (let i = 0; i < array.length; i += 1){
        newArray.push(cb(array[i]));

    }
    return console.log(newArray);
};

map([1, 2, 3, 4], function (val) {
    return val * 2;
}); // [2,4,6,8]
