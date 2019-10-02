Write a function called objectCompare which accepts two objects or two arrays. The function should return true if the two objects are identical or if the two arrays contain the same values at the same indices.

If you are comparing two objects, the of the keys in each object does not matter. If you are comparing two arrays the order does matter.

Do not use JSON.stringify to solve this quickly - it will not work!

Examples:



function objectCompare(element1, element2) {

  if (Array.isArray(element1)){

    for (let i = 0; i < element1.length; i += 1){
      if(element1[i] !== element2[i]){
        return false;
      }
    }
  } else {
      let keys = Object.keys(element1);
      for (let j = 0; j < keys.length; j += 1){
        let newKey = keys[j];
        if (!element2[newKey]) return false;
        if(element2[newKey]){
          if (Array.isArray(element2[newKey])) {
            if(element1[newKey].length !== element2[newKey].length){
              return false;
            }
            for (let i = 0; i < element2[newKey].length; i += 1) {
              if (element1[newKey][i] !== element2[newKey][i]) {
                return false;
              }
            }

          }
          else {
            if(element1[newKey] !== element2[newKey]){
          return false;
            }
      }
    }
  }
}
  return true;
}


var arr1 = [1,2,3,4]
var arr2 = [1,2,3,4]

objectCompare(arr1, arr2) // true

var arr3 = [1,2,3,4]
var arr4 = [4,3,2,1]

objectCompare(arr3, arr4) // false

var obj1 = {favNum: 22, favColor: "green"}
var obj2 = {favColor: "green", favNum: 22}

objectCompare(obj1, obj2) // true

var obj3 = {favNum: 22, favColor: "green"}
var obj4 = {favNum: 22, favColor: "blue"}

objectCompare(obj3, obj4) // false

var obj5 = {favNumbers: [1,2,3,4]}
var obj6 = {favNumbers: [1,2,3,4]}

objectCompare(obj5, obj6) // true

var obj7 = {favNumbers: [1,2,3,4,5]}
var obj8 = {favNumbers: [1,2,3,4]}

objectCompare(obj7, obj8) // false
