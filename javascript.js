const container = document.getElementById('grid-container');
const button = document.getElementById('button');
let number = 16;


// A function that generates a grid
function newGrid() {
    
    for (i=0; i < number*number; i++){
    const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);
    content.addEventListener('mouseover', (e) =>{
        content.style.backgroundColor = 'black'
    });
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    }
}

button.addEventListener("click", () =>{
    number = prompt('Write a number from 1-100');
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
    newGrid();
});





//A function that removes redundant borders
//function removeSameBorders(){
 //  const boxes = container.childNodes
 // for (i=1; i< number*number; i++){
 //  
  //        boxes[i].style.borderRight = '0px';
  //         boxes[i].style.borderBottom = '0px';
 //    }
 // }


newGrid()
