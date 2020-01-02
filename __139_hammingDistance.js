nstructions from your teacher:
Description
Write a function called hammingDistance.

(https://en.wikipedia.org/wiki/Hamming_distance).

This function takes in two strings of equal length, and calculates the distance between them. Here, "distance" is defined as the number of characters that differ at the same position. The function should ignore case.

If the inputs do not have the same length, the function should return "Input strings must have the same length."

Examples

function hammingDistance(string_1, string_2){
    let string1 = string_1.toLowerCase();
    let string2 = string_2.toLowerCase();
    let difference = 0;

    if(string1.length !== string2.length) {
        return "Input strings must have the same length.";
    }

    for (let i = 0; i < string1.length; i += 1) {
        for (let j = 0; j < string2.length; j += 1) {
            if(string1[i] !== string2[j] && i === j) {
                difference += 1;
            }
        }
    }
    return difference;
}
