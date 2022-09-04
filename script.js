function createGrid(){
    const container=document.querySelector(".Grid-Container");
    for(let i =0;i<4;i++){
        container.appendChild(createRow());
    }
}

function createRow(){
    const row = document.createElement("div");
    row.style.cssText="flex: 1 1 auto; display: flex;"
    for(let i=0;i<4;i++){
        row.appendChild(createGridElement());
    }
    return row;
}

function createGridElement(){
    const gridElement = document.createElement('div');
    gridElement.style.cssText="flex: 1; background-color: black; height: 180px; border: 2px solid blue;";
    return gridElement;
}

createGrid();