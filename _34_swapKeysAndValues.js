Write a function called swapKeyAndValue, which accepts an object and a key.

The function should return a new object with the given key and its value flipped, and all the other key/value pairs unchanged.

function swapKeyAndValue(obj, key){
  let newObj = {};
  let newArray = Object.keys(obj);

  for (let i = 0; i < newArray.length; i += 1){
    if(newArray[i] === key){
      newObj[obj[key]] = key;
    } else {
      newObj[newArray[i]] = obj[newArray[i]]
    }
  }
  return newObj;
}

var instructor = { name: 'Elie', job: 'Instructor' };

console.log(swapKeyAndValue(instructor, 'name'));
// {Elie: 'name', job: "Instructor"}


console.log(swapKeyAndValue(instructor, 'job'));
// {name: "Elie", Instructor: 'job'}
