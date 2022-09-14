let gridDimensions = 4;
let mouseDown = 0;  
window.onmousedown = () => {  
    mouseDown=1;  
    if (mouseDown) {  
        console.log('mouse button down')  
    }  
}  
window.onmouseup = () => {  
    mouseDown=0;  
    if (mouseDown) {  
        console.log('mouse button down')  
    }  
}

function createGrid(size){
    const container=document.querySelector(".Grid-Container");
    for(let i =0;i<size;i++){
        container.appendChild(createRow(size));
    }
}

function createRow(size){
    const row = document.createElement("div");
    row.style.cssText="flex: 1 1 auto; display: flex;"
    for(let i=0;i<size;i++){
        row.appendChild(createGridElement());
    }
    return row;
}

function createGridElement(){
    const gridElement = document.createElement('div');
    gridElement.style.cssText="flex: 1; background-color: white; border: 0.5px solid black;";
    gridElement.addEventListener('mousedown', ()=>{
        gridElement.style.backgroundColor="black";      //Change this to a variable later for colour options/eraser
    });
    gridElement.addEventListener("mouseenter",()=>{
        if(mouseDown){
            gridElement.style.backgroundColor="white";  
        }
    });
    gridElement.setAttribute("class", "Grid-Element");
    return gridElement;
}

function createInitialGrid(){
    createGrid(4);
}

function deleteCurrentGrid(){
    const gridContainer =document.querySelector(".Grid-Container");
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function resetGrid(){
    deleteCurrentGrid();
    createGrid(gridDimensions);
}


createInitialGrid();
const slider = document.querySelector(".Resize-Grid-Slider");
slider.addEventListener("input", ()=>{
    gridDimensions = slider.value;
    resetGrid();
});
const clearGridBtn =document.querySelector(".Clear-Grid-Btn");
clearGridBtn.addEventListener("click", resetGrid);