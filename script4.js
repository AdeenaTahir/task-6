
function capitalizeName() {
    
    var name = document.getElementById('nameInput').value.trim();
    var result = document.getElementById('result');

    
    if (!name) {
        result.className = 'result error';
        result.style.display = 'block';
        result.innerHTML = '❌ Please enter your name!';
        return;
    }

    
    if (name !== name.toLowerCase()) {
        result.className = 'result error';
        result.style.display = 'block';
        result.innerHTML = '❌ Please enter name in lowercase only!';
        return;
    }

   
    var words = name.split(' ');
    
   
    var capitalizedWords = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            var capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            capitalizedWords.push(capitalizedWord);
        }
    }

   
    var capitalizedName = capitalizedWords.join(' ');

    
    result.className = 'result success';
    result.style.display = 'block';
    result.innerHTML = '✅ Your capitalized name:<br><strong>' + capitalizedName + '</strong>';
}


document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('nameInput');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            capitalizeName();
        }
    });
});