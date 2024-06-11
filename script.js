let user
let correct = Math.floor(Math.random() * 20);


addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
       
        let user = prompt("pls enter a number")
               
        if (correct > user) {
            alert("go higher");
            
        }

        else if (correct < user) {
            alert("lower");
        }

        else {


            alert("congrats");
            
            
        }

    }
    
})

            
        

    

  