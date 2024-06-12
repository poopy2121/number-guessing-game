let user
const gohigher = new Audio();
const golower = new Audio();


function start() {
    let correct = Math.floor(Math.random() * 3);

addEventListener('keydown', function(event) {
    
    if (event.key === 'Enter') {
       
        let user = prompt("pls enter a number")
               
        if (correct > user) {
            alert("higher");
            
        }

        else if (correct < user) {
            alert("lower");
        }

        
        // user guesses correctly
        
        else {
            alert("congrats");
            correct = Math.floor(Math.random() * 3); 
            alert("a new number has been chosen")
        }

    }
});
}

        start();
    
    

// if i put math floor within the eventlistener, each time enter i pressed a new number is calculated, which is why i have to declare it outside 

  