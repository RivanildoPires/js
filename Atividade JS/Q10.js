document.addEventListener("DOMContentLoaded", function(){
    var num1 = 20;
    var num2 = 30;


    var resultado = num1 + num2;

    var pElement = document.querySelector("p");

    if(pElement){
        pElement.textContent = resultado;
    }
});