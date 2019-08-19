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


    
