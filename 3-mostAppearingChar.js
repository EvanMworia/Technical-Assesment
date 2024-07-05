function characterCount(input) {
    let characterAndIndex = [];
    let count = 0;
    let splitInput = input.toString().toLowerCase().split('');
    for (let i = 0; i < splitInput.length; i++) {
        for (let j = 0; j < splitInput.length; j++) {
            if (splitInput[i] === splitInput[j]) {
                count += 1;
            }
        }

        let character = splitInput[i];
        characterAndIndex.push({ [character]: count });
        count = 0;
    }

    return characterAndIndex;
}

let input = 'oop';
// let input = 'zaaaz';
let charCount = characterCount(input);
console.log(charCount);
