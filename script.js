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
    gridElement.style.cssText="flex: 1; background-color: black; border: 2px solid blue;";
    gridElement.addEventListener('click', ()=>{
        gridElement.style.backgroundColor="white";      //Change this to a variable later for colour options/eraser
    });
    return gridElement;
}

function createInitialGrid(){
    createGrid(4);
}

function gridClickColourChange(){

}
function deleteCurrentGrid(){
    
}

createInitialGrid();