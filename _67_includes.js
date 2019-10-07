Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.

The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.
function includes(collection, value, index = 0){

    if (Array.isArray(collection)) {
        for (let i = index; i < collection.length; i += 1){
            if(collection[i] === value){
                return true;
            }
        }
        return false;

    } else if (typeof collection === "string"){
        for (let k = index; k < collection.length; k += 1) {

            if (collection[k] === value){
                return true;
            }
        }
        return false;

    } else {

        let keys = Object.keys(collection);

        for (let j = 0; j < keys.length; j += 1) {
            if (collection[keys[j]] === value) {
                return true;
           }
           }
        return false;
        }
    }
