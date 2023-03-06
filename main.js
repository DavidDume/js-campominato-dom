const gridDom = document.querySelector(".grid");

const selectDom = document.querySelector('#select');

const playBtn = document.querySelector('#play');

//crea la grid appena il programma si carica
gameMode(parseInt(selectDom.value));

playBtn.addEventListener('click', function() {
    gameMode(parseInt(selectDom.value))
})

function gameMode(mode) {
    // resetto il grid ogni volta che cambio modalita di gioco
    gridDom.innerHTML = ""

    let classText;

    if(mode == 100) {
        classText = "facile";
    } else if(mode == 81) {
        classText = "intermedio";
    } else if(mode == 49) {
        classText = "difficile";
    }

    for(let i = 1; i <= mode; i++) {
        let box = document.createElement('div');
        box.classList.add(classText);
        box.classList.add('box');
        box.addEventListener('click', function() {
    
            //mostra il numero solo se box non è ancora attiva
            if(!this.classList.contains('clicked')) {
                console.log(i);
            }
            this.classList.toggle('clicked');
            
        })
        gridDom.append(box);
    
    }
}

// crea l'array con le caselle per le bombe
function createBombs(cells) {
    let caselleBombe = [];
    for(let i = 1; i <= 16; i++) {
        caselleBombe.push(Math.floor(Math.random() * (cells - 1) + 1));
    }

    return caselleBombe;
}


function addBombs() {
    let bombe = createBombs(parseInt(selectDom.value));
    //se esistiono duplicati rifai l'array delle bombe finche non ce un'array senza duplicati
    while(hasDuplicate(bombe)) {
        bombe = createBombs(parseInt(selectDom.value)); 
    } 
    return bombe;
} 

// controlla se ci sono dei numeri che si ripetono in un array
function hasDuplicate(arr) {
    for(let i = 0; i < arr.length; i++) {

        for(let k = 0; k < arr.length; k++) {

            //evito che si compari con se stesso
            if(i !== k) {

                if(arr[i] == arr[k]) {
                    return true;
                } 

            }
        }
    }
    return false;
}

console.log(addBombs());