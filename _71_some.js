
  // add whatever parameters you deem necessary - good luck!
  function some(array, callback){

    for (let i = 0; i < array.length; i += 1){
        if(callback(array[i], i, array)){
            return true;
        }
    }
    return false;
}

var arr = [1, 2, 3, 4];
