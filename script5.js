
function calculateBMI() {
    
    var age = parseInt(document.getElementById('age').value);
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var result = document.getElementById('result');

    
    if (!age || age < 2 || age > 120) {
        result.className = 'result error show';
        result.innerHTML = '❌ Please enter a valid age (2-120)!';
        return;
    }

  
    if (!height || !weight) {
        result.className = 'result error show';
        result.innerHTML = '❌ Please enter both height and weight!';
        return;
    }

    if (height <= 0 || weight <= 0) {
        result.className = 'result error show';
        result.innerHTML = '❌ Please enter valid positive numbers!';
        return;
    }

    
    var heightInMeters = height / 100;

    
    var bmi = weight / (heightInMeters * heightInMeters);
    bmi = Math.round(bmi * 10) / 10;

    
    var category = '';
    var categoryClass = '';
    var emoji = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        categoryClass = 'underweight';
        emoji = '⚠️';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal Weight';
        categoryClass = 'normal';
        emoji = '✅';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
        categoryClass = 'overweight';
        emoji = '⚠️';
    } else {
        category = 'Obese';
        categoryClass = 'obese';
        emoji = '🚨';
    }

 
    result.className = 'result ' + categoryClass + ' show';
    result.innerHTML = 
        '<div class="bmi-value">' + bmi + '</div>' +
        '<div class="bmi-category">' + emoji + ' ' + category + '</div>' +
        '<p>Age: ' + age + ' | Gender: ' + (gender === 'male' ? 'Male' : 'Female') + '</p>' +
        '<p>Height: ' + height + ' cm | Weight: ' + weight + ' kg</p>';
}


function clearForm() {
    document.getElementById('age').value = '25';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.querySelector('input[name="gender"][value="male"]').checked = true;
    
    var result = document.getElementById('result');
    result.className = 'result';
    result.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('age').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('height').focus();
        }
    });

    document.getElementById('height').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('weight').focus();
        }
    });

    document.getElementById('weight').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateBMI();
        }
    });
});