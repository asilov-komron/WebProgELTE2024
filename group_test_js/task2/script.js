const box = document.querySelector('#resizableRectangle')
const height = document.querySelector('#height')
const width = document.querySelector('#width')
const colorBox = document.querySelector('#colorBox')
let i = 0

const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Brown",
    "Gray",
    "Black",
    "Purple",
    "Cyan",
    "Magenta",
    "Turquoise",
    "Lavender"
  ];
  




height.addEventListener('input', height_changer)
width.addEventListener('input', width_changer)
colorBox.addEventListener('click', change_color)

function change_color(){
    i = (i + 1) % colors.length;
    colorBox.style.backgroundColor = colors[i]
    box.style.backgroundColor = colorBox.style.backgroundColor
}

function height_changer(){
    box.style.height = `${height.value}px`
}

function width_changer(){
    box.style.width = `${width.value}px`
}




