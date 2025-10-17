export const masCpf = (texto) => {
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

export const masCep = (texto) => {
    let cepNaN = texto.replace(/\D/g, '').trim(); // Remove tudo que não for número
    if (cepNaN.length > 2) {
        cepNaN = cepNaN.slice(0, 2) + '.' + cepNaN.slice(3);
    }
    if (cepNaN.length > 6) {
        cepNaN = cepNaN.slice(0, 6) + '-' + cepNaN.slice(7);
    }
    return cepNaN.slice(0, 10);
};

export const masCnt = (texto) => {
    let cntNaN = texto.replace(/\D/g, '').trim();
    if (cntNaN.length > 0) {
        cntNaN = '(' + cntNaN;
    }
    if (cntNaN.length > 3) {
        cntNaN = cntNaN.slice(0, 3) + ')' + cntNaN.slice(3);
    }
    if (cntNaN.length > 9) {
        cntNaN = cntNaN.slice(0, 9) + '-' + cntNaN.slice(9);
    }
    return cntNaN.slice(0, 14);
}
export const masCemail = (texto) => {
    let emailNaN = texto.trim();
    emailNaN = emailNaN.replace(/\s+/g, '');
    emailNaN = emailNaN.replace(/[^\w.@-]/g, '');
    return emailNaN.toLowerCase();
}
export const masCnome = (texto) => {
    let nomeNaN = texto.replace(/\s{2,}/g, ' ');//trim();
    //nomeNaN = nomeNaN.replace(/\s{2,}/g, ' ');
    nomeNaN = nomeNaN.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    nomeNaN = nomeNaN.toLowerCase();
    nomeNaN = nomeNaN.replace(/(^|\s)\S/g, (letra) => letra.toUpperCase())
    //nomeNaN = nomeNaN.replace(/[^\w.@-]/g, '');
    return nomeNaN//.toLowerCase();
}

export const MasCdata = (texto) => {
    let dataNaN = texto.replace(/\D/g, '').trim(); // Remove tudo que não for número
    if (dataNaN.length > 2) {
        dataNaN = dataNaN.slice(0, 2) + '/' + dataNaN.slice(2);
    }
    if (dataNaN.length > 7) {
        dataNaN = dataNaN.slice(0, 7) + '.' + dataNaN.slice(7);
    }
    if (dataNaN.length > 11) {
        dataNaN = dataNaN.slice(0, 11) + '-' + dataNaN.slice(11);
    }
    return dataNaN.slice(0, 14);
};