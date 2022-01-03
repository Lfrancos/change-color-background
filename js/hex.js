const hex = [0, 1 , 2, 3, 4 , 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];

// All the elements that we are going to be using in this exercise.
const btn = document.querySelector(".btn");
const container = document.querySelector(".container")
const body = document.querySelector("body");
let text = document.querySelector(".colorText");



// this will create a hex color out of the array hex that you can see at the beginning
const createColor = () => {
    let hexColor = '#';
    for (let i = 0 ; i <= 5 ; i++) {
        let randomN = Math.floor(Math.random() * hex.length);
        hexColor += hex[randomN];
    }
    return hexColor;
}


let changeColor = () => {
    body.style.backgroundColor = createColor();
    text.textContent = createColor();
}



btn.addEventListener('click', changeColor);
// console.log(createColor());