//User Selects a Color
//User clicks a box to change the color
//Take the class name from what is clicked
//Add the class name to the respective grid.

let mainColor = "#ff6961"

const colors = document.querySelectorAll('.palette')
const grids = document.getElementsByClassName('grid-item')

for (let i = 0; i < grids.length; i++){
    grids[i].addEventListener("click", onClick);
}

colors.forEach(color =>{
    color.addEventListener("click", (e) => {
        console.log(e.target.dataset)
        mainColor = e.target.dataset.color
    })
})

function onClick(e) {
    e.target.style.backgroundColor = mainColor
}