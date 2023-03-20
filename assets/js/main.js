//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
//emetto un messaggio in console con il numero della cella cliccata.

// Creo una variabile dove salvo il container delle 100 celle (container-grid)

const container = document.querySelector(".container");

//creo una variabile dove salvo l'input del bottone da premere

const buttonStart = document.querySelector(".button_start");


// creo un max numero di celle

let nMax = 100;//Ci saranno quindi 10 caselle per ognuna delle 10 righe.


//creo una variabile che mi svuota il container prima di aver premuto il bottone
container.innerHTML = ``;

//successivamente creo un evento che funge da 'click' del bottone che fa apparire la griglia di gioco
// creo un ciclo n volte per le celle (dove n in questo caso sta per 100) all'interno dell'evento


buttonStart.addEventListener("click", function(){
   
    container.innerHTML = ``;

    for (let i = 1; i <= nMax; i++) {
        
        const cell = `<div class="cell">${i}</div>`;

        
        container.innerHTML += cell;
        
    }

    //creo un array vuoto per inserire i numeri casuali
    const bombCell = []
    
    

    for (let index = 1; index <= 16; index++) {
    //creo una variabile che ci restituisce un numero randomico tra 1 e 16
        const bombNumber = Math.floor(Math.random() * 100)+1;

        if (bombNumber !== nMax) {

            bombCell.push(bombNumber);
            
        } 
        
    }

    
  // seleziono una cella che ha classe cell e active

    const cellEl = document.querySelectorAll(".cell")
    
    


    //creo un for loop  
    for (let j = 0; j < cellEl.length; j++) {
        
        const thisCell = cellEl[j];
        console.log(thisCell)
        console.log(bombCell.includes(j + 1))

      
        // aggiungo eventlisner per la classe active ciclando per la lunghezza dell'array cellEl

        thisCell.addEventListener("click", function() {


            if (bombCell.includes(j + 1) == true) {

                cellEl[j].classList.toggle("bg_red")
                // this.classList.add("active")
                console.log(`You're fu**ed`)

                alert(`You're fu**ed`)
        
            } else if (bombCell.includes(j + 1) == false) {
            
                cellEl[j].classList.toggle("bg_lightblue")
                // this.classList.add("active")
                console.log(`You clicked number ${j}`)
            
            }


            
            
        })

       
            
            
                
                
            

       
        

    };

    console.log(bombCell);

    
});