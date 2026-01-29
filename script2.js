const hoursInput = document.getElementById('hours-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

convertBtn.addEventListener('click', function() {
    const hours = Number(hoursInput.value);
    
    if (hoursInput.value === '' || hours < 0) {
        result.textContent = 'Please enter a valid number!';
        result.style.color = '#A3DFF2;c';
        result.classList.add('show');
        return;
    }
    
    const seconds = hours * 3600;
    
    result.textContent = `${hours} hours = ${seconds} seconds`;
    result.style.color = '#A3DFF2';
    result.classList.add('show');
});

hoursInput.addEventListener('input', function() {
    result.classList.remove('show');
});

hoursInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertBtn.click();
    }
});