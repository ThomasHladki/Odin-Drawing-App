const DEFAULT_COLOUR="black";
const DEFAULT_DIMENSIONS=4;
let currentMode="drawingMode";
let currentColour=DEFAULT_COLOUR;
let gridDimensions = DEFAULT_DIMENSIONS;

let mouseDown = 0;  
window.onmousedown = () => {  
    mouseDown=true;   
}  
window.onmouseup = () => {  
    mouseDown=false;  
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
    gridElement.style.cssText="flex: 1; border: 0.5px solid black;";
    gridElement.addEventListener('mousedown', ()=>{
        gridElement.style.backgroundColor="black";      //Change this to a variable later for colour options/eraser
    });
    gridElement.addEventListener("mouseenter",()=>{
        if(mouseDown){
            gridElement.style.backgroundColor="black";  
        }
    });
    gridElement.setAttribute("class", "Grid-Element");
    return gridElement;
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

createGrid(gridDimensions);
const slider = document.querySelector(".Resize-Grid-Slider");
slider.addEventListener("input", ()=>{
    gridDimensions = slider.value;
    resetGrid();
});
const clearGridBtn =document.querySelector(".Clear-Grid-Btn");
clearGridBtn.addEventListener("click", resetGrid);
const eraserModeBtn=document.querySelector(".Eraser-Mode-Btn");
eraserModeBtn.addEventListener("click", ()=>{
    if(currentMode=="drawingMode"){
        currentMode="eraserMode";
    eraserModeBtn.setAttribute("class", "Active-Mode-Btn");
    }
    
});