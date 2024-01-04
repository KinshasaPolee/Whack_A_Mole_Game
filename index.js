let currMoleTile;
let currPlantTile;

window.onload = function () {
    setGame();
}

function setGame() {
    // game grid
    for (let i = 0; i < 9; i++) {

        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./montyMole.png";

    let num = getRandomTile();
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

    mole.style.position = "relative";
    mole.style.top = "-72px";
}

function setPlant() {

    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    let plant =  document.createElement("img");
    plant.src = "./piranhaPlant.png";
}