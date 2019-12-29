Instructions from your teacher:
Write a function called keyCount which accepts an array of objects and returns an object with a count of how many times each key appears in the array of objects.

Examples:

function keyCount(array){

    return array.reduce(function (current, obj, i, array) {
        for (let key in obj) {
            current[key] = (current[key] += 1) || 1;
        }
        return current;
    }, {})
}

keyCount([
  { name: "Elie", catOwner: false },
  { name: "Moxie", isCat: true }
]) // { name: 2, catOwner: 1, isCat: 1}

keyCount([
  { age: 1, eyeColor: "blue" },
  { age: 3, eyeColor: "brown" },
  { age: 7, inSchool: true }
]) // { age: 3, eyeColor: 2, inSchool: 1 }

Try to solve this using reduce.
