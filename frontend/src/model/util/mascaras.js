import { data } from "react-router-dom";

const seletor = () =>{

}

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
    const hoje = new Date();
    let data = texto.replace(/\D/g, '').trim();

    if (data.length > 2) data = data.slice(0, 2) + '/' + data.slice(2);
    if (data.length > 5) data = data.slice(0, 5) + '/' + data.slice(5);

    if (data.length === 10) {
        let [dia, mes, ano] = data.split('/').map(Number);
        const anoAtual = hoje.getFullYear();
        const mesAtual = hoje.getMonth() + 1;
        const diaAtual = hoje.getDate();

        if (dia < 1 || dia > 31) dia = diaAtual;
        if (mes < 1 || mes > 12) mes = mesAtual;
        if (ano < 1943 || ano > anoAtual) ano = anoAtual;

        // Ajustar zeros à esquerda
        const dd = String(dia).padStart(2, '0');
        const mm = String(mes).padStart(2, '0');

        data = `${dd}/${mm}/${ano}`;
    }

    return data.slice(0, 10);
};
/*
export const MasCdata = (texto) => {
    const d = new Date();
    let dataNaN = texto.replace(/\D/g, '').trim();
    if (dataNaN.length > 2) {
        dataNaN = dataNaN.slice(0, 2) + '/' + dataNaN.slice(2);
    }
    if (dataNaN.length > 5) {
        dataNaN = dataNaN.slice(0, 5) + '/' + dataNaN.slice(5);
    }
    if (dataNaN.length === 10) {
        let dia = dataNaN.slice(0, 2);
        let mes = dataNaN.slice(3, 5);
        let ano = dataNaN.slice(6, 10);
        const anoAtual = d.getFullYear();
        const mesAtual = d.getMonth();
        const diaAtual = d.getDate()

        if (dia > diaAtual && (mes - 1) >= mesAtual && ano >= anoAtual || dia < 1) {
            dia = diaAtual;
        }
        if ((mes - 1) > mesAtual && ano >= anoAtual || mes > 12 || mes < 1) {
            mes = mesAtual + 1;
        }
        if (ano > anoAtual || ano < 1943) {
            ano = anoAtual;
        }

        dataNaN = dia + '/' + mes + '/' + ano;
        //console.log(data)
        //console.log(dia, mes, ano);
    }
    return dataNaN.slice(0, 10);
};*/