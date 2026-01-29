
function generateRandomArray() {
    const arrayLength = Math.floor(Math.random() * 10) + 5; 
    const randomArray = [];
    
    for (let i = 0; i < arrayLength; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        randomArray.push(randomNumber);
    }
    
    return randomArray;
}

function pickFirstAndLast(array) {
    if (array.length === 0) {
        return {
            first: null,
            last: null
        };
    }
    
    return {
        first: array[0],
        last: array[array.length - 1]
    };
}

const generateBtn = document.getElementById('generateBtn');
const arrayOutput = document.getElementById('arrayOutput');
const firstElement = document.getElementById('firstElement');
const lastElement = document.getElementById('lastElement');

generateBtn.addEventListener('click', function() {
    
    const myArray = generateRandomArray();
    
    arrayOutput.textContent = '[' + myArray.join(', ') + ']';
    
    const result = pickFirstAndLast(myArray);
    
    firstElement.textContent = result.first;
    lastElement.textContent = result.last;
});