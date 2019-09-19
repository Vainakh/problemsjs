Write a function called twoHighest that takes an array of numbers as its argument and returns the two highest numbers within the array.

The returned value should be an array in the following format: [secondHighest, highest]

The order of the numbers passed in could be any order.

Do not use the build in sort() method - the tests will fail!

function twoHighest(array){

	let firstNum = 0;
	let secondNum = 0;

	for(let i = 0; i < array.length; i += 1){
		if(firstNum < array[i]){
			secondNum = firstNum;
			firstNum = array[i];
		}else if(secondNum < array[i]){
			secondNum = array[i];
		}
	}

	return [secondNum, firstNum];
}


console.log(twoHighest([1, 2, 10, 8])); // [8, 10]
console.log(twoHighest([6, 1, 9, 10, 4])); // [9,10]
console.log(twoHighest([4, 25, 3, 20, 19, 5])); // [20,25]
console.log(twoHighest([1, 2, 2])); // [2, 2];
