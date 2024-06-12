const h1 = document.querySelector(".hi")
const arrowup = document.createElement('img')
const imgurl = 'iamges/arrowup.jpg'
arrowup.src = imgurl
let user
const gohigher = new Audio('soundeffects/ding-126626.mp3');
const golower = new Audio('soundeffects/boing-2-44164.mp3');
const won = new Audio('soundeffects/yay-6120.mp3');
let username

function start() {

    let correct = Math.floor(Math.random() * 9 + 1);
        let username = prompt("ur name?")

addEventListener('keydown', function(event) {
    console.log(username);
    
    if (event.key === 'Enter') {
        console.log(correct);
       
        let user = prompt("pls enter a number" + username)
               
        if (correct > user) {           
             gohigher.play();           
            alert("higher");
            h1.append(arrowup);
        }

        else if (correct < user) {
            golower.play();
            alert("lower");
        }

        // user guesses correctly
        else {
            won.play();
            alert("congrats");
            correct = Math.floor(Math.random() * 9 + 1); 
            alert("a new number has been chosen")
        }

        if (username === null) {
            alert("u gotta enter a name");

        }
    }
});
}

start();
  
    
    

// if i put math floor within the eventlistener, each time enter i pressed a new number is calculated, which is why i have to declare it outside 

  