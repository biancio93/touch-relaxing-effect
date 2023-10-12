document.addEventListener('DOMContentLoaded', () => {
    const min = 1;
    const max = 6;
    const grid = document.querySelector('.grid');
    const width = 28 //28 x 28 = 784 squares
    // l'array qui sotto disegna la griglia di gioco, ad ogni pixel è associato un elemento
    let layout = []
    layout.lenght=2244;
    for(let i=0; i<layout.lenght; i++){
        const layoutElement = Math.floor(Math.random()*(max-min+1)+min);
        layout.push(layoutElement);
    }
    console.log(layout);
    
let squares = [];
/* Creo l'array squares vuoto perchè dovrà essere popolato dal push nella prossima funzione.
lo inserisco prima perchè se lo eseguissi dopo il push, genererei un errore, in quanto la funzione pusherebbe
dei dati in un array che ancora non esiste perchè non è stato dichiarato */


//Legenda
//0 - punto di pacman
//1 - muro
//2 - fantasmino
//3 - power-pellet
//4 - vuota

//disegno la griglia e la renderizzo
function createBoard() {
    for (let i = 0; i < layout.length; i++) { //faccio in modo che l'evento si ripeta per tutti gli elementi dell'array
        const square = document.createElement('div');//creo un elemento html div 
        grid.appendChild(square);//dico che l'elemento creato è figlio del div grid
        squares.push(square);//inserisco gli elementi creati all'interno di un array che devo creare
        //associo un layout agli elementi creati
        squares[i].classList.add('circle');
        let layout_element = layout[i];
        switch(layout_element){
            case 1:squares[i].classList.add('red'); break;
            case 2:squares[i].classList.add('yellow'); break;
            case 3:squares[i].classList.add('light-yellow'); break;
            case 4:squares[i].classList.add('green'); break;
            case 5:squares[i].classList.add('light-blue'); break;
            case 6:squares[i].classList.add('blue'); break;
        }
    }
}
createBoard()
let test = document.querySelectorAll('.circle');

console.log(test[1].getBoundingClientRect().top + 20);
document.getElementById("touch-grid").addEventListener("touchmove", touchCoordinates);
function touchCoordinates(event) {
    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;
    let x_min = x - 20;
    let x_max = x + 20;
    let y_min = y - 20;
    let y_max = y + 20;
    document.getElementById("demo").innerHTML = x + ", " + y;
    for (let k = 0; k < test.length; k++){
        let square_element = test[k];
        let square_coordinates = square_element.getBoundingClientRect();
        let square_x = square_coordinates.left;
        let square_y = square_coordinates.top;
        if (square_x < x_max && square_x > x_min && square_y < y_max && square_y > y_min){
            square_element.classList.add('active');
            setTimeout(function(){
                square_element.classList.remove('active');
            }, 1000);
        } else{};
    }
  }
})







