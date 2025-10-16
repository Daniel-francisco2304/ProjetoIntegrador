export const cpf = (texto) => {
    let cpfNaN = texto.replace(/\D/g, '').trim(); // Remove tudo que não for número
    if (cpfNaN.length > 3) {
        cpfNaN = cpfNaN.slice(0, 3) + '.' + cpfNaN.slice(3);
    }
    if (cpfNaN.length > 7) {
        cpfNaN = cpfNaN.slice(0, 7) + '.' + cpfNaN.slice(7);
    }
    if (cpfNaN.length > 11) {
        cpfNaN = cpfNaN.slice(0, 11) + '-' + cpfNaN.slice(11);
    }
    return cpfNaN.slice(0, 14);
};

export const cep = (texto) => {
    let cepNaN = texto.replace(/\D/g, '').trim(); // Remove tudo que não for número
    if (cepNaN.length > 2) {
        cepNaN = cepNaN.slice(0, 2) + '.' + cepNaN.slice(3);
    }
    if (cepNaN.length > 6) {
        cepNaN = cepNaN.slice(0, 6) + '-' + cepNaN.slice(7);
    }
    return cepNaN.slice(0, 10);
};