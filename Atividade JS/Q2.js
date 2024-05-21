function extensaoArquivo(nomeArquivo){

    var a = nomeArquivo.split('.');


    return a[a.length - 1];
}

var arquivo1 = 'texto.docx';
var arquivo2 = 'roteiro.pdf';

console.log(`A extensão do arquivo "${arquivo1}" é: ${extensaoArquivo(arquivo1)}`);
console.log(`A extensão do arquivo "${arquivo2}" é: ${extensaoArquivo(arquivo2)}`);