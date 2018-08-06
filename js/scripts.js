var sentence = prompt("enter sentence");

var firstLetter = sentence.charAt(0);

var lastLetter = sentence.charAt(sentence.length - 1);

var firstLastLetter = firstLetter.toUpperCase() + lastLetter.toUpperCase();

reverse = function reverseString (firstLetter, lastLetter) {
return lastLetter + firstLetter;
};

function reverseString(str) {
    return str.split("").reverse().join("");
}

var reverseSentence = sentence + reverseString(firstLastLetter);
console.log(reverseSentence);

var getMiddle = reverseSentence.charAt(Math.round((reverseSentence.length)/2)-1);

console.log(reverseSentence.length/2);
console.log(getMiddle);

var newSentence =  getMiddle + reverseSentence;
console.log(reverseString(newSentence));
