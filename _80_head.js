Write a function called head which returns the first element of the input array.

function head(array){
    return array[0];
}

console.log(head([1, 2, 3])); // 1
console.log(head([
    { name: "Elie" },
    { name: "Matt" },
    { name: "Michael" }
]));// {name: "Elie"}
console.log(head([])); // undefined
