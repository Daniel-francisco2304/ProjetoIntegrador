import React from "react";
import { useState } from "react";
import { BsFloppy } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { RxCross1 } from "react-icons/rx";
import { MySelect } from "./MySelect";

import MyText from "./MyText";
import MyTextArea from "./MyTextArea";
import MyButton from "./MyButton";
import MyInput from '../components/MyInput'

export function MyModal({ isOpen, setIsOpen }) {
    //const [isOpen, setIsOpen] = useState(defaultOpen);
    const [nome, setNome] = useState('example');
    const [cpf, setCpf] = useState('example');
    const [nRegistro, setNRegistro] = useState('example');
    const [email, setEmail] = useState('example');
    const [contato1, setContato1] = useState('example');
    const [contato_2, setContato2] = useState('example');
    const [dtContratacao, setDtContratacao] = useState('example');
    const [cargo, setCargo] = useState('example');
    const [filial, setFilial] = useState('example');
    const [status, setStatus] = useState('example');
    const [Alergia, setAlergia] = useState('example');
    const [emergencia, setEmergencia] = useState('example');
    const [acidente, setAcidente] = useState('example');
    const [sangue, setSangue] = useState('1');
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
                            onClick={() => setIsOpen(false)}
                        ></div>
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
                                value={nome}
                                onChange={(e) => { setNome(e.target.value) }}
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
                                        value={cpf}
                                        onChange={(e) => setCpf(e.target.value)}
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
                                        value={dtContratacao}
                                        onChange={(e) => setDtContratacao(e.target.value)}
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
                                        value={contato1}
                                        onChange={(e) => setContato1(e.target.value)}
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
                                        value={contato_2}
                                        onChange={(e) => setContato2(e.target.value)}
                                        style={{
                                            width: '100%',
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    />
                                </div>
                                <div style={{
                                    marginLeft: '0',
                                    width: '32%',
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                    <MyInput size='lg'
                                        value={cargo}
                                        onChange={(e) => setCargo(e.target.value)}
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
                                        Filial:
                                    </MyText>
                                    <MyInput size='lg'
                                        value={filial}
                                        onChange={(e) => setFilial(e.target.value)}
                                        style={{
                                            width: '100%',
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    />
                                </div>
                                <div style={{
                                    marginLeft: '5%',
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
                                    <MyInput size='lg'
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        style={{
                                            width: '100%',
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    />
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
                                    multiline={true}
                                    value={Alergia}
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
                                        value={emergencia}
                                        onChange={(e) => setEmergencia(e.target.value)}
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
                                        value={acidente}
                                        onChange={(e) => { setAcidente(e.target.value) }}
                                        style={{
                                            width: '100%',
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginLeft: '4%',
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
                                    <MySelect
                                        style={{
                                            marginTop: 0,
                                            marginBottom: 10,
                                        }}
                                        value={sangue}
                                        onChange={(e) => { setSangue(e.target.value) }}
                                        variant='cinzaClaro'
                                    >
                                        <option value={'1'} >O+</option>
                                        <option value={'2'} >O-</option>
                                        <option value={'3'} >A+</option>
                                        <option value={'4'} >A-</option>
                                        <option value={'5'} >B+</option>
                                        <option value={'6'} >B-</option>
                                        <option value={'7'} >AB+</option>
                                        <option value={'8'} >AB-</option>
                                    </MySelect>
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
                                        onClick={() => { setIsOpen(false); alert('Salvo com sucesso') }}>
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
                                        title={<><RxCross1 />Cancelar</>}
                                        onClick={() => setIsOpen(false)}>
                                    </MyButton>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}