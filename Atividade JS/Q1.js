function perimetro(a, b, c) {
    return (a + b + c) / 2;
}

function areaTriangulo(a, b, c) {
    var p = perimetro(a, b, c);
    return Math.sqrt(p * (p- a) * (p - b) * (p - c));
}

var lado1 = 5;
var lado2 = 6;
var lado3 = 7;
var area = areaTriangulo(lado1, lado2, lado3);

console.log("A área do triângulo é: " + area);