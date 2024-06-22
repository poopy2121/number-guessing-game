const h1 = document.querySelector(".hi")
const arrowup = document.createElement('img')
const imgurl = 'iamges/arrowup.jpg'
arrowup.src = imgurl
const arrowdown = document.createElement('img')
const arrowdownurl = 'iamges/arrowdown.jpg'
arrowdown.src = arrowdownurl
const gohigher = new Audio('soundeffects/ding-126626.mp3');
const golower = new Audio('soundeffects/boing-2-44164.mp3');
const won = new Audio('soundeffects/yay-6120.mp3');
let username
let user
let score = 0;
document.createElement('p')
    arrowdown.style.width = "80px";
            arrowup.style.width = "80px";
let tries = 5

function start() {

    let correct = Math.floor(Math.random() * 9 + 1);

    
        const userbox = document.getElementById("n")
        const guessbtn = document.getElementById("btn");
        let sc = document.getElementById("sc")



        guessbtn.addEventListener('click', function() {

            console.log(tries);


         user = userbox.value
        console.log(user);

        if (correct > user) {           
             gohigher.play();           
            alert("higher");
            h1.append(arrowup);
            arrowdown.remove();
            score += 5;
            tries -=1;
        }


        else if (correct < user) {
            golower.play();
            alert("lower");
            h1.append(arrowdown);
            arrowup.remove();
            score +=5;
        }

      
        

        // user guesses correctly
        else {
            won.play();
            alert("congrats");
            arrowup.remove();
            arrowdown.remove();
            correct = Math.floor(Math.random() * 9 + 1); 
            alert("a new number has been chosen")
            score = 0 // sobalds richtig geraten wird score auf 0 zurückgesetzt, mach ich wahrscheinlich weg. ist dumm. hab ich nur zum verständis ausprobiert
        }
        sc.innerText = score;

        
     })
    }
;

start();
// if i put math floor within the eventlistener, each time enter i pressed a new number is calculated, which is why i have to declare it outside 


function easylevel() {
    score = 0
    p.innerText = "level 1"
    correct =  Math.floor(Math.random() * 5 + 1);
     
    
}

function mediumlevel() {
    p.innerText = "level 2"
    correct =  Math.floor(Math.random() * 10 + 1);

    
}


    function hardlevel() {
    score = 0
    p.innerText = "level 3"
    correct =  Math.floor(Math.random() * 5 + 1);
    }

    //probieren