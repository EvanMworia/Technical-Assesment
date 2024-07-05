//Design a function that reverses the digits of an integer. For example, 50
//should become 5 and -12 should become -21

function reverseInteger(input) {
    let isInputNotNumerical = isNaN(input);

    if (isInputNotNumerical) {
        return console.log('Input should be an Integer');
    }

    if (input > 0) {
        let splitInput = input.split('');
        let reversedResult = splitInput.reverse();

        let joinedResult = reversedResult.join('');
        let finalResult = +joinedResult;
        return console.log(`${input} .... ${finalResult}`);
    } else {
        let splitInput = input.split('');

        let reversedResult = [];
        reversedResult.push(splitInput[0]);
        for (let i = 1; i < splitInput.length; i++) {
            reversedResult.push(splitInput[splitInput.length - i]);
        }
        let joinedResult = reversedResult.join('');
        let finalResult = +joinedResult;
        return console.log(`${input} .... ${finalResult}`);
    }
}

let input = '123456';
reverseInteger(input);
