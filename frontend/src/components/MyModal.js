import React, { useEffect } from "react";
import { useState } from "react";
import { BsFloppy } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { RxCross1 } from "react-icons/rx";
import { MySelect } from "./MySelect";

import MyText from "./MyText";
import MyTextArea from "./MyTextArea";
import MyButton from "./MyButton";
import MyInput from '../components/MyInput'
import { CadCargos } from "./cadCargos";

import { postFuncionario, putFuncionario } from "../model/funcionario";
import { getAllFilial } from "../model/filial";
import { getAllCargo } from "../model/cargo";
import { getAllSangue, getAllStatus } from "../model/status";

import { masCnt, masCpf, masCemail, masCnome, MasCdata } from "../model/util/mascaras";

export function MyModal({ isOpen, setIsOpen, func }) {
    const [nome, setNome] = useState(func?.f_nome || '');
    const [cpf, setCpf] = useState(func?.cpf || '');
    const [nRegistro, setNRegistro] = useState(func?.Registro || '');
    const [email, setEmail] = useState(func?.email || '');
    const [contato1, setContato1] = useState(func?.contato1 || '');
    const [contato2, setContato2] = useState(func?.contato2 || '');
    const [dtContratacao, setDtContratacao] = useState(func?.contratacao || '');
    const [cargo, setCargo] = useState(func?.c_nome || '');
    const [filial, setFilial] = useState(func?.Loja || '');
    const [status, setStatus] = useState(func?.status || '');
    const [alergia, setAlergia] = useState(func?.alergia || '');
    const [emergencia, setEmergencia] = useState(func?.emergencia || '');
    const [acidente, setAcidente] = useState('');
    const [sangue, setSangue] = useState('');
    const [id, setId] = useState(func.Registro);

    const [ckey, setCKey] = useState([]); // cargo
    const [fkey, setFkey] = useState([]); // funcionário
    const [skey, setSkey] = useState([]); // status
    const [bkey, setBkey] = useState([]); // sangue => Blood 

    const [openIs, setOpenIs] = useState(false)

    const setDefault = () => {
        setNome('');
        setCpf('');
        setNRegistro('');
        setEmail('');
        setContato1('');
        setContato2('');
        setDtContratacao('');
        setCargo('');
        setFilial('');
        setStatus('');
        setAlergia('');
        setEmergencia('');
        setAcidente('');
        setSangue('1');
        setIsOpen(false);
    }
    async function handleSave(obj, nome, cpf, email, dtContratacao, contato1, contato2, cargo, filial, emergencia, status, alergia, sangue, id) {
        if (obj === false) {
            if (await postFuncionario(nome, cpf, email, dtContratacao, contato1, contato2, cargo, filial, emergencia, status, alergia, sangue, id)) {
                setDefault();
                setIsOpen(false);
            };

        } else {
            await putFuncionario(id, nome, cpf, email, dtContratacao, contato1, contato2, emergencia, status, alergia);
            setDefault();
        }
    }
    const carregarStatus = async () => {
        try {
            const data = await getAllStatus();
            setSkey(data);
        } catch (err) {
            alert("err", err);
        }
    }
    const carregarCargos = async () => {
        try {
            const data = await getAllCargo();
            setCKey(data);
        } catch (err) {
            alert("err", err);
        }
    }
    const carregarSangue = async () => {
        try {
            const data = await getAllSangue();
            setBkey(data);
        } catch (err) {
            alert("err", err);
        }
    }

    useEffect(() => {
        const novoCargo = (cargo) => {
            if (cargo === '0') {
                setOpenIs(true);
            }
        }
        novoCargo(cargo);
        carregarCargos();
        carregarStatus();
        carregarSangue();
    }, [cargo]);

    useEffect(() => {
        const carregarFiliais = async () => {
            try {
                const data = await getAllFilial();
                setFkey(data);
            } catch (err) {
                alert("err", err);
            }
        }
        carregarFiliais();
        carregarCargos();
    }, [isOpen]);

    useEffect(() => {
        if (!func) return;

        setNome(func.f_nome || '');
        setCpf(func.cpf || '');
        setNRegistro(func.Registro || '');
        setEmail(func.email || '');
        setContato1(func.contato1 || '');
        setContato2(func.contato2 || '');
        setDtContratacao(func.contratacao || '');
        setCargo(func.c_nome || '');
        setFilial(func.Loja || '');
        setStatus(func.status || '');
        setAlergia(func.alergia || '');
        setEmergencia(func.emergencia || '');
        setAcidente(func.acidente || '');
        setSangue('1');
    }, [func]);
    if (!isOpen) return null;

    return (
        <div>
            <div>
                {isOpen && (
                    <>
                        <div
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#00000080",
                                zIndex: 10
                            }}
                            onClick={() => { setIsOpen(false); }}
                        ></div>
                        <form onSubmit={(e) => { e.preventDefault(); handleSave(func, nome, cpf, email, dtContratacao, contato1, contato2, cargo, filial, emergencia, status, alergia, sangue, id); }}>
                            <div
                                style={{
                                    position: "fixed",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    background: "white",
                                    width: '60%',
                                    minWidth: 500,
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    padding: 20,
                                    borderRadius: 10,
                                    zIndex: 20
                                }}
                            >
                                <MyText
                                    style={{
                                        display: "flex",
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        justifyContent: 'flex-start',
                                        marginLeft: '4%'
                                    }}
                                >
                                    Funcionario:
                                </MyText>

                                <MyInput size='lg'
                                    placeholder="Digite o nome do funcionário"
                                    value={nome}
                                    onChange={(e) => { setNome(masCnome(e.target.value)) }}
                                    style={{ marginLeft: '5%', }}
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: 'row',
                                        marginLeft: '5%',
                                    }}
                                >
                                    <div style={{
                                        width: '30%',
                                        marginRight: '5%',
                                    }}>
                                        <MyText
                                            style={{
                                                display: "flex",
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                padding: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                                margin: 0,
                                            }}
                                        >
                                            CPF:
                                        </MyText>
                                        <MyInput
                                            size='lg'
                                            placeholder="xxx.xxx.xxx-xx"
                                            value={cpf}
                                            onChange={(e) => setCpf(masCpf(e.target.value))}

                                            style={{ width: '100%', }}
                                        />
                                    </div>
                                    <div style={{
                                        width: '30%',
                                    }}>
                                        <MyText
                                            style={{
                                                display: "flex",
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                padding: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                                margin: 0,

                                            }}
                                        >
                                            Nº Registro:
                                        </MyText>
                                        <MyInput size='lg'
                                        placeholder="Ex.:123"
                                            disabled={true}
                                            value={nRegistro}
                                            onChange={(e) => setNRegistro(e.target.value)}
                                            style={{ width: '100%', }}
                                        />
                                    </div>
                                    <div style={{
                                        marginLeft: '5%',
                                        marginRight: '5%',
                                        width: '30%',
                                    }}
                                    >
                                        <MyText
                                            style={{
                                                display: "flex",
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                justifyContent: 'flex-start',
                                                margin: 0,
                                                padding: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                                alignItems: "center",
                                            }}
                                        >
                                            Contratação:
                                        </MyText>
                                        <MyInput size='lg'
                                            type={"text"}
                                            value={dtContratacao}
                                            onChange={(e) => setDtContratacao(MasCdata(e.target.value))}
                                            style={{
                                                width: '100%',
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: 'row',
                                        marginLeft: '5%',
                                    }}
                                >
                                    <div style={{
                                        width: '32%',
                                    }}>
                                        <MyText
                                            style={{
                                                display: "flex",
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                padding: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                                margin: 0,
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            Contato 1:
                                        </MyText>
                                        <MyInput size='lg'
                                            placeholder="(xx)xxxxx-xxxx"
                                            value={contato1}
                                            onChange={(e) => setContato1(masCnt(e.target.value))}
                                            style={{
                                                width: '100%',
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        />
                                    </div>
                                    <div style={{
                                        width: '32%',
                                    }}>
                                        <MyText
                                            style={{
                                                display: "flex",
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                padding: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                                margin: 0,
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            Contato 2:
                                        </MyText>
                                        <MyInput size='lg'
                                            placeholder="(xx)xxxxx-xxxx"
                                            value={contato2}
                                            onChange={(e) => setContato2(masCnt(e.target.value))}
                                            style={{
                                                width: '100%',
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        />
                                    </div>
                                    <div style={{
                                        marginLeft: '0',
                                        width: '31%',
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                        <MyText
                                            style={{
                                                display: "flex",
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                justifyContent: 'flex-start',
                                                margin: 0,
                                                padding: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                            }}
                                        >
                                            Email:
                                        </MyText>
                                        <MyInput
                                        placeholder="Digite o email do funcionario"
                                            value={email}
                                            onChange={(e) => setEmail(masCemail(e.target.value))}
                                            size='lg' style={{ width: '100%', }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: 'row',
                                        marginLeft: '5%',
                                    }}
                                >
                                    <div style={{
                                        width: '30%',
                                    }}>
                                        <MyText
                                            style={{
                                                display: "flex",
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                padding: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                                margin: 0,
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            Cargo:
                                        </MyText>
                                        <select
                                            value={cargo}
                                            defaultValue={1}
                                            onChange={(e) => setCargo(e.target.value)}
                                            style={{
                                                display: "flex",
                                                width: '100%',
                                                borderRadius: 4,
                                                border: "1px solid #ccc",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "10px 14px",
                                                fontSize: "18px",
                                            }}
                                        >
                                            <option value={'-1'} >Selecione uma opção</option>
                                            {Array.isArray(ckey) ? (ckey.map((ckey, i) => (
                                                <option key={i} value={ckey.id}>{ckey.nome}</option>))) : (<></>)
                                            }
                                            <option value={'0'} onClick={() => { alert('click') }}>Adicionar um cargo?</option>
                                        </select>
                                    </div>
                                    <div style={{
                                        marginLeft: '3%',
                                        marginRight: '3%',
                                        width: '30%',
                                    }}>
                                        <MyText
                                            style={{
                                                display: "flex",
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                padding: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                                margin: 0,
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            Filial:
                                        </MyText>
                                        <select
                                            value={filial}
                                            defaultValue={1}
                                            onChange={(e) => setFilial(e.target.value)}
                                            style={{
                                                display: "flex",
                                                width: '100%',
                                                borderRadius: 4,
                                                border: "1px solid #ccc",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "10px 14px",
                                                fontSize: "18px",
                                            }}
                                        >
                                            <option>Selecione uma opção</option>
                                            {Array.isArray(fkey) ? (fkey.map((fkey, i) => (
                                                <option key={i} value={fkey.id_filial}>{fkey.nome}</option>))) : (<></>)}
                                        </select>
                                    </div>
                                    <div style={{
                                        width: '30%',
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    >
                                        <MyText
                                            style={{
                                                display: "flex",
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                justifyContent: 'flex-start',
                                                margin: 0,
                                                padding: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                                alignItems: "center",
                                            }}
                                        >
                                            Status:
                                        </MyText>
                                        <select
                                            value={status}
                                            defaultValue={1}
                                            onChange={(e) => setStatus(e.target.value)}
                                            style={{
                                                display: "flex",
                                                width: '100%',
                                                borderRadius: 4,
                                                border: "1px solid #ccc",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "10px 14px",
                                                fontSize: "18px",
                                            }}
                                        >
                                            <option>Selecione uma opção</option>
                                            {Array.isArray(skey) ? (skey.map((skey, i) => (
                                                <option key={i} value={skey.id_status}>{skey._status}</option>))) : (<></>)}
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <MyText
                                        style={{
                                            display: "flex",
                                            fontSize: '20px',
                                            fontWeight: 'bold',
                                            justifyContent: 'flex-start',
                                            marginLeft: '4%'
                                        }}
                                    >
                                        Alergias
                                    </MyText>
                                    <MyTextArea
                                        size='lg'
                                        placeholder="Digite aqui todas as alergias e doenças prévias de seus funcionários"
                                        multiline={true}
                                        value={alergia}
                                        onChange={(e) => setAlergia(e.target.value)}
                                        style={{ marginLeft: '5%', }}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        marginLeft: '5%',
                                    }}
                                >
                                    <div style={{
                                        width: '30%',
                                    }}>
                                        <MyText
                                            style={{
                                                display: "flex",
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                padding: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                                margin: 0,
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            Emergência:
                                        </MyText>
                                        <MyInput size='lg'
                                            placeholder="(xx)xxxxx-xxxx"
                                            value={emergencia}
                                            onChange={(e) => setEmergencia(masCnt(e.target.value))}
                                            style={{
                                                width: '100%',
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        />
                                    </div>
                                    <div style={{
                                        width: '30%',
                                    }}>
                                        <MyText
                                            style={{
                                                display: "flex",
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                padding: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                                margin: 0,
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            Ult. Acid.:
                                        </MyText>
                                        <MyInput size='lg'
                                            type={"date"}
                                            value={acidente}
                                            onChange={(e) => setAcidente(e.target.value)}
                                            style={{
                                                width: '100%',
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: 'column',
                                            marginRight: '5%'
                                        }}
                                    >
                                        <MyText
                                            style={{
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                margin: 0,
                                                padding: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                            }}
                                        >Tipo Sanguineo</MyText>
                                        <select
                                            value={sangue}
                                            defaultValue={1}
                                            onChange={(e) => setSangue(e.target.value)}
                                            style={{
                                                display: "flex",
                                                width: '100%',
                                                borderRadius: 4,
                                                border: "1px solid #ccc",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "10px 14px",
                                                fontSize: "18px",
                                            }}
                                        >
                                            {Array.isArray(bkey) ? (bkey.map((bkey, i) => (
                                                <option key={i} value={bkey.id_sangue}>{bkey.sangue}</option>))) : (<></>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: 'flex-end',
                                }}>
                                    <IconContext.Provider value={{ size: 17 }} >
                                        <MyButton
                                            variant='warning'
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "6px",
                                                justifyContent: "center",
                                            }}
                                            title={<><BsFloppy></BsFloppy>salvar</>}
                                            type="submit"
                                        >
                                        </MyButton>
                                        <MyButton
                                            variant='danger'
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: "6px",
                                                marginRight: '5%'
                                            }}
                                            type="reset"
                                            title={<><RxCross1 />Cancelar</>}
                                            onClick={() => {
                                                setNome('');
                                                setCpf('');
                                                setNRegistro('');
                                                setEmail('');
                                                setContato1('');
                                                setContato2('');
                                                setDtContratacao('');
                                                setCargo('');
                                                setFilial('');
                                                setStatus('');
                                                setAlergia('');
                                                setEmergencia('');
                                                setAcidente('');
                                                setSangue('1');
                                                setIsOpen(false);
                                            }}
                                        >
                                        </MyButton>
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </form>
                    </>
                )}
            </div>
            {<CadCargos openIs={openIs} setOpenIs={setOpenIs} setCargo={setCargo}></CadCargos>}
        </div >
    )
}