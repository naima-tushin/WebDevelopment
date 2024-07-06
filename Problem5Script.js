// Problem Statement 5 Starts
//Answer of Question 1
function toCase(str) {
    const lower = str.toLowerCase();
    const upper = str.toUpperCase();
    return `${lower}-${upper}`;
}

console.log(toCase('Mthatha')); // Output: mthatha-MTHATHA

//Answer of Question 2
function firstChar(str) {
    str = str.trim();
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            return str[i];
        }
    }
    return '';
}

console.log(firstChar(' Rosa Parks ')); // Output: R

//Answer of Question 3
function rotate(array) {
    if (array.length === 0) {
        return array;
    }
    return [...array.slice(1), array[0]];
}

console.log(rotate(['a', 'b', 'c'])); // Output: ['b', 'c', 'a']
// Problem Statement 5 Ends