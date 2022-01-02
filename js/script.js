// all the colors that we need
const colors = ["green", "red", "orange"];

// All the elements that we are going to be using in this exercise.
const btn = document.querySelector(".btn");
const container = document.querySelector(".container")
const body = document.querySelector("body");
let text = document.querySelector(".colorText");

//create a random number from the array of colors that we have at the begining.
let randomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}
//  will change the color of the background, and the color of the container of the text.
const changeColor = () => {
    let randomN = randomNumber();
    body.style.backgroundColor = colors[randomN] ;
    let randomTwo = randomNumber();
    text.textContent =  colors[randomN];
    text.style.color = colors[randomN];
    // if (randomN === randomN) {
    //      randomN = randomNumber();
    // };
    while (randomTwo === randomN ) {
        return randomTwo = randomNumber();
    };
    console.log(randomN, randomTwo);
    container.style.backgroundColor = colors[randomTwo];
};
btn.addEventListener('click', changeColor );

// btn.addEventListener('click', changeColor(body));

