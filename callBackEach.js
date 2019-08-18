function each(array, cb){
    for (let i = 0; i < array.length; i += 1){
        let currentElement = array[i];

        cb(currentElement);
    }

}
