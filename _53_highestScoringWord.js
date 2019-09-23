Given a string of words, your goal is to find the highest scoring word in the string. a is worth 1 point, b is worth 2 points, c is worth 3 points, and so on, all the way up until z, which is worth 26 points. You can assume that strings will consist only of lowercase letters and spaces.

In the event that two words have the same score, return the word that appears first in the string.

Examples:

function highestScoringWord(string){
  let newString = string.split(" ");
  let scores = {};
    for (let i = 0; i < newString.length; i++) {
      let currentWord = newString[i];
        scores[currentWord] = wordScore(currentWord);
        }
      return Object.keys(scores).sort(function (a, b) {
    return scores[b] - scores[a];
  })[0];
}

function wordScore(word) {
  let alphabet = " abcdefghijklmnopqrstuvwxyz";
  let letters = word.split("");
    let score = 0;
      letters.forEach(function (letter) {
      score += alphabet.indexOf(letter);
    });
  return score;
}


console.log(highestScoringWord("a b c d e f")); // "f"
console.log(highestScoringWord("hello world")); // "world"
console.log(highestScoringWord("go ahead make my day")); // "my"
console.log(highestScoringWord("there is no place like home")); // "there"
console.log(highestScoringWord("aaaaaa bbb cc f")); // "aaaaaa"
console.log(highestScoringWord("bbb cc f aaaaaa")); // "bbb"
console.log(highestScoringWord("this sentence has two highest scoring words"));
// "sentence"
