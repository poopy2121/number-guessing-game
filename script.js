const h1 = document.querySelector(".hi")
const arrowup = document.createElement('img')
const imgurl = 'iamges/arrowup.jpg'
arrowup.src = imgurl
const gohigher = new Audio('soundeffects/ding-126626.mp3');
const golower = new Audio('soundeffects/boing-2-44164.mp3');
const won = new Audio('soundeffects/yay-6120.mp3');
let username
let user
function start() {

    let correct = Math.floor(Math.random() * 9 + 1);
         username = prompt("ur name?")

addEventListener('keydown', function(event) {
    
    if (event.key === 'Enter') {
        const userbox = document.getElementById("n")
        const button = document.getElementById("btn");



        button.addEventListener('click', function() {
            console.log(user);


         user = userbox.value
        

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
            arrowup.remove();
            correct = Math.floor(Math.random() * 9 + 1); 
            alert("a new number has been chosen")
        }

        
     })
    }
});
}
start();
// if i put math floor within the eventlistener, each time enter i pressed a new number is calculated, which is why i have to declare it outside 

  