"use strict";

//suma
const sum = document.getElementById("btn-sumar");
//evento click
sum.addEventListener("click", function() {
    //inputs 
    let sumValueOne = document.getElementById("valor1").value
    let sumValueTwo = document.getElementById("valor2").value
    console.log(sumValueOne, sumValueTwo)
    //resultado suma
    let resultSum = Number.parseInt(sumValueOne) + Number.parseInt(sumValueTwo)
    console.log(resultSum)
    document.querySelector(".resultado").innerHTML = resultSum;
})


//resta
const rest = document.getElementById("btn-restar");
//evento click
rest.addEventListener("click", function() {
    //inputs 
    let restValueOne = document.getElementById("valor1").value
    let restValueTwo = document.getElementById("valor2").value
    console.log(restValueOne, restValueTwo)
    //resultado resta
    let resultRest = Number.parseInt(restValueOne) - Number.parseInt(restValueTwo)
    console.log(resultRest)
    document.querySelector(".resultado").innerHTML = resultRest;
})


