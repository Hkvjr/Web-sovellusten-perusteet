document.addEventListener('DOMContentLoaded', function() {
    var diceElement = document.getElementById('dice');

    diceElement.addEventListener('click', function() {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        var imagePath = './img/' + randomNumber + '.png'; 

        var diceImage = diceElement.querySelector('img');
        diceImage.src = imagePath; 

        console.log('Noppaa on pyöritetty, arvottu luku:', randomNumber);
    });
});