function hasConsecutive(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === 3 && numbers[i + 1] === 3) {
            return true;
        }
    }

    return false;
}

console.log(hasConsecutive([1, 3, 3]));
console.log(hasConsecutive([1, 3, 1, 3]));
