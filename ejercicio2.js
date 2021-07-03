"use strict";

//boton 1 
let buttonOne = document.getElementById("btn-1");
//evento click
buttonOne.addEventListener('click', function colors() {
    //sellecion de color html
    let ColorSelect = window.getComputedStyle(buttonOne).getPropertyValue("background-color");
    //aplicacion del color
    document.getElementById("caja").setAttribute("style", `background-color: ${ColorSelect}; border: 1px solid black; width: 100%; height: 100%`);
})

//boton 2 
let buttonTwo = document.getElementById("btn-2");
//evento click
buttonTwo.addEventListener('click', function colors() {
    //sellecion de color html
    let ColorSelect = window.getComputedStyle(buttonTwo).getPropertyValue("background-color");
    //aplicacion del color
    document.getElementById("caja").setAttribute("style", `background-color: ${ColorSelect}; border: 1px solid black; width: 100%; height: 100%`);
})

//boton 3
let buttonThree = document.getElementById("btn-3");
//evento click
buttonThree.addEventListener('click', function colors() {
    //sellecion de color html
    let ColorSelect = window.getComputedStyle(buttonThree).getPropertyValue("background-color");
    //aplicacion del color
    document.getElementById("caja").setAttribute("style", `background-color: ${ColorSelect}; border: 1px solid black; width: 100%; height: 100%`);
})

//boton 4 
let buttonFour = document.getElementById("btn-4");
//evento click
buttonFour.addEventListener('click', function colors() {
    //sellecion de color html
    let ColorSelect = window.getComputedStyle(buttonFour).getPropertyValue("background-color");
    //aplicacion del color
    document.getElementById("caja").setAttribute("style", `background-color: ${ColorSelect}; border: 1px solid black; width: 100%; height: 100%`);
})

//boton 5
let buttonFive = document.getElementById("btn-5");
//evento click
buttonFive.addEventListener('click', function colors() {
    //sellecion de color html
    let ColorSelect = window.getComputedStyle(buttonFive).getPropertyValue("background-color");
    //aplicacion del color
    document.getElementById("caja").setAttribute("style", `background-color: ${ColorSelect}; border: 1px solid black; width: 100%; height: 100%`);
})

//boton 6 
let buttonSix = document.getElementById("btn-6");
//evento click
buttonSix.addEventListener('click', function colors() {
    //sellecion de color html
    let ColorSelect = window.getComputedStyle(buttonSix).getPropertyValue("background-color");
    //aplicacion del color
    document.getElementById("caja").setAttribute("style", `background-color: ${ColorSelect}; border: 1px solid black; width: 100%; height: 100%`);
})




