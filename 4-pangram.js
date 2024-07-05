function isPangram(string) {
    string = string.toLowerCase();

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let char of string) {
        let index = alphabet.indexOf(char);

        if (index !== -1) {
            alphabet.splice(index, 1);
        }

        if (alphabet.length === 0) {
            return true;
        }
    }

    return false;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello, world!'));
