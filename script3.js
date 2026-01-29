
function findInArray() {
    var arrayInput = document.getElementById('array').value;
    var targetInput = document.getElementById('target').value;
    var result = document.getElementById('result1');

  
    if (!arrayInput || !targetInput) {
        result.className = 'result error';
        result.style.display = 'block';
        result.innerHTML = '❌ Please fill both fields!';
        return;
    }

    
    var array = arrayInput.split(',').map(function(item) {
        return parseFloat(item.trim());
    });

    var target = parseFloat(targetInput);

    var index = -1;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === target) {
            index = i;
            break;
        }
    }

    
    if (index === -1) {
        result.className = 'result error';
        result.style.display = 'block';
        result.innerHTML = '❌ Number ' + target + ' not found in array!';
        return;
    }

    
    if (index === array.length - 1) {
        result.className = 'result error';
        result.style.display = 'block';
        result.innerHTML = '❌ ' + target + ' is the last element!';
        return;
    }

    
    var nextNumber = array[index + 1];
    result.className = 'result success';
    result.style.display = 'block';
    result.innerHTML = '✅ Next number after ' + target + ' is: <strong>' + nextNumber + '</strong>';
}


function findNext() {
    var input = document.getElementById('number').value;
    var result = document.getElementById('result2');

    
    if (!input) {
        result.className = 'result error';
        result.style.display = 'block';
        result.innerHTML = '❌ Please enter a number!';
        return;
    }

    var num = parseFloat(input);

    
    if (isNaN(num)) {
        result.className = 'result error';
        result.style.display = 'block';
        result.innerHTML = '❌ Invalid number!';
        return;
    }

    var nextNum;
    var type;

    if (num % 1 === 0) {
        
        nextNum = num + 1;
        type = 'Integer';
    } else {
        
        nextNum = (num + 0.1).toFixed(1);
        type = 'Float';
    }

    result.className = 'result success';
    result.style.display = 'block';
    result.innerHTML = '✅ Type: <strong>' + type + '</strong><br>' +
                     '✅ Your Number: <strong>' + num + '</strong><br>' +
                     '✅ Next Number: <strong>' + nextNum + '</strong>';
}