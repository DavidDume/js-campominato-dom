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