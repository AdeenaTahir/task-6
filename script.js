const dateInput = document.getElementById('date-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

convertBtn.addEventListener('click', function() {
    const birthDate = dateInput.value;
    
    if (!birthDate) {
        result.textContent = 'Please select your date of birth!';
        result.style.color = '#e769a0';
        result.classList.add('show');
        return;
    }
    
    const birth = new Date(birthDate);
    const today = new Date();
    
    if (birth > today) {
        result.textContent = 'Date cannot be in the future!';
        result.style.color = '#e769a0';
        result.classList.add('show');
        return;
    }
    
    const diffTime = today - birth;
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    result.textContent = `You are ${totalDays} days old!`;
    result.style.color = '#ea66b1';
    result.classList.add('show');
});

dateInput.addEventListener('change', function() {
    result.classList.remove('show');
});

dateInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertBtn.click();
    }
});