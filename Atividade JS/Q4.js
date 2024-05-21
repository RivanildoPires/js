
const numero1 = parseInt(prompt("Digite o primeiro número: "));
const numero2 = parseInt(prompt("Digite o segundo número: "));

if(numero1 === numero2){
    var soma = (numero1 + numero2) * 3;
}else{

    soma = numero1 + numero2;
}

alert("A soma dos numeros: " + soma);