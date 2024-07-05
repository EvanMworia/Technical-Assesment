/**Master Yoda, a renowned Jedi Master from the Star Wars universe, is known
for his unique way of speaking. He often reverses the order of words in his
sentences. For example, instead of saying "I am home" he might say "Home
am I" Design a function that takes a sentence as input and returns a new
sentence with the words reversed in the same order that Master Yoda would
use. */

function reverse(input) {
    let reversedResult = [];
    let splitInput = input.split(' ');
    for (let i = splitInput.length; 0 < i; i--) {
        reversedResult.push(splitInput[i - 1]);
    }
    return (finalResult = reversedResult.join(' '));
}

let input = 'I am Home';
let answer = reverse(input);
console.log(answer);
