nstructions from your teacher:
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space.

function extractFullName(array){
    let newarray = array.map(myFunction);

    function myFunction(object){

            return object["first"] + " " + object["last"];
        }
    return newarray;
}
