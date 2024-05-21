function calcular(numero){
    const diferenca = numero - 13;

    if(numero >  13){
        return diferenca * 2;
    } else{
        return diferenca;
    }
}

const numero1 = 6;
const numero2 = 30;


console.log(`A diferença entre ${numero1} e 13 é: ${calcular(numero1)}`);
console.log(`A diferença entre ${numero2} e 13 é: ${calcular(numero2)}`);

