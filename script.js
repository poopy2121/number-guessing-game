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
let score 
let correct
const userbox = document.getElementById("n")
        const guessbtn = document.getElementById("btn");
        let sc = document.getElementById("sc")
let user = userbox.value;


function start() {
        alert("welcome")
       
}

function levelone() {


        correct = Math.floor(Math.random() * 5 + 1)
        if (correct > user) {
                alert("higher")
                
        }

        else if (user > correct) {
                alert("lower")
                
        }

        else {
                alert("u won")
        }
}

function leveltwo() {
        correct = Math.floor(Math.random() * 10 + 1)
            if (correct > user) {
                alert("higher")
                
        }

        else if (user > correct) {
                alert("lower")
                
        }

        else {
                alert("u won")
        }
    
}

function levelthree() {
        correct = Math.floor(Math.random() * 20 + 1)
            if (correct > user) {
                alert("higher")
                
        }

        else if (user > correct) {
                alert("lower")
                
        }

        else {
                alert("u won")
        }
    console.log(correct)
}
start();
levelone();
leveltwo();