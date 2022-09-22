const DEFAULT_COLOUR="black";
const DEFAULT_DIMENSIONS=4;
let currentMode="drawingMode";
let currentColour=DEFAULT_COLOUR;
let gridDimensions = DEFAULT_DIMENSIONS;
let mouseDown = false;  
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
        if(currentMode=="drawingMode"){
            gridElement.classList.remove("Grid-Element-Base-State");
            gridElement.style.backgroundColor=currentColour;      //Change this to a variable later for colour options/eraser
        }else{
            gridElement.style.removeProperty("background-color");
            gridElement.classList.add("Grid-Element-Base-State");
        }
        
    });
    gridElement.addEventListener("mouseenter",()=>{
        if(mouseDown){
            if(currentMode=="drawingMode"){
                gridElement.classList.remove("Grid-Element-Base-State");
                gridElement.style.backgroundColor=currentColour;      //Change this to a variable later for colour options/eraser
            }else{
                gridElement.style.removeProperty("background-color");
                gridElement.classList.add("Grid-Element-Base-State");
            }
        }
    });
    gridElement.setAttribute("class", "Grid-Element");
    gridElement.classList.add("Grid-Element-Base-State");
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

function updateToggleInfo(status){
    const toggleContainer = document.querySelector(".Toggle-Container");
    toggleContainer.removeChild(document.querySelector(".Toggle-Status"));
    const newStatus =document.createElement("span");
    newStatus.textContent=status;
    newStatus.setAttribute("class","Toggle-Status");
    toggleContainer.appendChild(newStatus);
}
function updateDimensionsInfo(newDimensionValue){
    const dimensionsInfo=document.querySelector(".Current-Dimensions");
    dimensionsInfo.removeChild(dimensionsInfo.firstChild);
    const newDimensionsSpan = document.createElement("span");
    newDimensionsSpan.textContent=newDimensionValue+" by "+newDimensionValue;
    dimensionsInfo.appendChild(newDimensionsSpan);
}
createGrid(gridDimensions);
const slider = document.querySelector(".Resize-Grid-Slider");
slider.addEventListener("input", ()=>{
    gridDimensions = slider.value;
    resetGrid();
    updateDimensionsInfo(slider.value);
});
const clearGridBtn =document.querySelector(".Clear-Grid-Btn");
clearGridBtn.addEventListener("click", resetGrid);
const eraserModeBtn=document.querySelector(".Eraser-Mode-Btn");
eraserModeBtn.addEventListener("click", ()=>{
    if(currentMode=="drawingMode"){
        currentMode="eraserMode";
        eraserModeBtn.classList.add("Active-Mode-Btn");
        updateToggleInfo("ON");
    }else{
        currentMode="drawingMode";
        eraserModeBtn.classList.remove("Active-Mode-Btn");
        updateToggleInfo("OFF");
    }
});
document.querySelector(".Select-Red").addEventListener("click",()=>{
    currentColour="red";
});
document.querySelector(".Select-Blue").addEventListener("click",()=>{
    currentColour="blue";
});
document.querySelector(".Select-Yellow").addEventListener("click",()=>{
    currentColour="yellow";
});
document.querySelector(".Select-Green").addEventListener("click",()=>{
    currentColour="green";
});
document.querySelector(".Select-Purple").addEventListener("click",()=>{
    currentColour="purple";
});
document.querySelector(".Select-Orange").addEventListener("click",()=>{
    currentColour="rgb(255, 112, 60)";
});
document.querySelector(".Select-Black").addEventListener("click",()=>{
    currentColour="black";
});
document.querySelector(".Select-Pink").addEventListener("click",()=>{
    currentColour="pink";
});
document.querySelector(".Select-Brown").addEventListener("click",()=>{
    currentColour="rgb(64, 10, 10)";
});
document.querySelector(".Select-Teal").addEventListener("click",()=>{
    currentColour="teal";
});
document.querySelector(".Select-Light-Grey").addEventListener("click",()=>{
    currentColour="rgb(143, 140, 140)";
});
document.querySelector(".Select-Peach").addEventListener("click",()=>{
    currentColour="peachpuff";
});
document.querySelector(".Select-Dark-Grey").addEventListener("click",()=>{
    currentColour="rgb(82, 80, 80)";
});
document.querySelector(".Select-Burgundy").addEventListener("click",()=>{
    currentColour="rgb(160, 36, 36)";
});
document.querySelector(".Select-Lime").addEventListener("click",()=>{
    currentColour="lime";
});