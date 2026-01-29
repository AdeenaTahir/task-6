
const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const result = document.getElementById('result');


firstNumber.addEventListener('input', function() {
    
    result.value = 'NaN';
});


secondNumber.addEventListener('input', function() {
   
    const num1 = parseFloat(firstNumber.value);
    const num2 = parseFloat(secondNumber.value);
    
    
    if (!isNaN(num1) && !isNaN(num2)) {
       
        const sum = num1 + num2;
        result.value = sum;
    } else {
        
        result.value = 'NaN';
    }
});