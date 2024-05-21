function removerLetra(str, posicao) {

    if (posicao < 0 || posicao >= str.length) {
        console.log("Posição inválida.");
        return;
    }
    
const letraRemovida = str.charAt(posicao);

const novaLetra = str.slice(0, posicao) + str.slice(posicao + 1);


console.log("Letra que foi removida:", letraRemovida);
console.log("String que foi mudada:", novaLetra);
}

const palavra = "Rivanildo";
const posicao = 7;

removerLetra(palavra, posicao);