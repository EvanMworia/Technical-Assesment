// Write a recursive function to calculate the factorial of a number

function factorial(input) {
    let isInputNotNumerical = isNaN(input);

    if (isInputNotNumerical) {
        return 'Input should be an Integer';
    }
    if (input == 0) {
        return (input = 1);
    }
    let result = input * factorial(input - 1);
    return result;
}

let input = '4';
let answer = factorial(input);
console.log(answer);
