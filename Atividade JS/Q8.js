  var numero1 = prompt("Digite o primeiro número:");

  var numero2 = prompt("Digite o segundo número:");

  var num1 = parseInt(numero1);
  var num2 = parseInt(numero2);
  

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, insira números válidos.");
  } else {

    var soma = num1 + num2;
    
    alert("A soma dos dois números é: " + soma);
  }