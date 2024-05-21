function atividadeDoDia(dia) {
    let atividade;

    switch (dia.toUpperCase()) {
        case 'SEGUNDA':
            atividade = 'REUNIÃO';
            break;
        case 'TERÇA':
            atividade = 'PALESTRA';
            break;
        case 'QUARTA':
            atividade = 'WORKSHOP';
            break;
        case 'QUINTA':
            atividade = 'TRABALHO REMOTO';
            break;
        case 'SEXTA':
            atividade = 'AGENDAMENTO SEMANAL';
            break;
        case 'SABADO':
            atividade = 'SHOPPING';
            break;
        case 'DOMINGO':
            atividade = 'PRAIA';
            break;
        default:
            atividade = 'DIA INVÁLIDO';
            break;
    }

    return atividade;
}

console.log(atividadeDoDia('SEGUNDA'));
console.log(atividadeDoDia('TERÇA'));
console.log(atividadeDoDia('QUARTA'));
console.log(atividadeDoDia('QUINTA'));
console.log(atividadeDoDia('SEXTA'));
console.log(atividadeDoDia('SABADO'));
console.log(atividadeDoDia('DOMINGO')); 