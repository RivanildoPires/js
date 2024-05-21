function calculoMedia(num1, num2) {
   
    if (num1 >= 0 && num1 <= 10 && num2 >= 0 && num2 <= 10) {
        var media = (num1 + num2) / 2;
        console.log("A média entre", num1, "e", num2, "é:", media);
    } else {
        console.log("Valor inválido: " + (num1 < 0 || num1 > 10 ? num1 : num2 < 0 || num2 > 10 ? num2 : ""));
    }
}

calculoMedia(5,9);
