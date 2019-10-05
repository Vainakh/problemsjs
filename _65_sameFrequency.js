Write a function called sameFrequency which accepts two numbers and returns true if they contain the same frequency of digits. Otherwise, it returns false.

function sameFrequency(num1, num2){

        let firstNum = num1.toString().split("");
        let secondNum = num2.toString().split("");

        if(firstNum.length !== secondNum.length){
            return false;
        }

        let newObj = [];

        for (let i = 0; i < firstNum.length; i += 1) {
            newObj[i] += firstNum[i];
        }

        for (let j = 0; j < secondNum.length; j += 1) {
            newObj[j] -= secondNum[j];
        }

        if(newObj.keys.length === 0){
            return true;
        }

    }

    console.log(sameFrequency(551122, 221515)); // true
    console.log(sameFrequency(321142, 3212215)); // false
