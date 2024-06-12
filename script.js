let user
const gohigher = new Audio('soundeffects/ding-126626.mp3');
const golower = new Audio('soundeffects/boing-2-44164.mp3');
const won = new Audio('soundeffects/yay-6120.mp3');

function start() {

    let correct = Math.floor(Math.random() * 3);

addEventListener('keydown', function(event) {
    
    if (event.key === 'Enter') {
       
        let user = prompt("pls enter a number")
               
        if (correct > user) {           
             gohigher.play();           
            alert("higher");
        }

        else if (correct < user) {
            golower.play();
            alert("lower");
        }

        
        // user guesses correctly
        
        else {
            won.play();
            alert("congrats");
            correct = Math.floor(Math.random() * 3); 
            alert("a new number has been chosen")
        }

    }
});
}

        start();
    
    

// if i put math floor within the eventlistener, each time enter i pressed a new number is calculated, which is why i have to declare it outside 

  