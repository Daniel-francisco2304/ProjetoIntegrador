import React from "react";
import { useState } from "react";
import MyInput from '../components/MyInput'
import MyText from "./MyText";
import MyButton from "./MyButton";
import { BsFloppy, BsX } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { RxCross1 } from "react-icons/rx";
import MyTextArea from "./MyTextArea";
import { MySelect } from "./MySelect";


export function MyModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [nome, setNome] = useState('example');
    
    const [cpf, setCpf] = useState('example');
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
    const [sangue, setSangue] = useState('example');
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
                            <MyInput size='lg' disabled={true} />
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: 'row',
                                    marginLeft: '5%',
                                }}
                            >
                                <div style={{
                                    width: '45%',
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
                                    <MyInput size='lg' style={{
                                        width: '100%',
                                    }} />
                                </div>
                                <div style={{
                                    marginLeft: '5%',
                                    width: '45%',
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
                                        }}
                                    >
                                        Email:
                                    </MyText>
                                    <MyInput size='lg' style={{
                                        width: '100%',
                                    }} />
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
                                        Contato 1:
                                    </MyText>
                                    <MyInput size='lg' style={{
                                        width: '100%',
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }} />
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
                                        Contato 2:
                                    </MyText>
                                    <MyInput size='lg' style={{
                                        width: '100%',
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }} />
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
                                            justifyContent: "center",
                                        }}
                                    >
                                        Contratação:
                                    </MyText>
                                    <MyInput size='lg' style={{
                                        width: '100%',
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }} />
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
                                    <MyInput size='lg' style={{
                                        width: '100%',
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }} />
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
                                    <MyInput size='lg' style={{
                                        width: '100%',
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }} />
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
                                            justifyContent: "center",
                                        }}
                                    >
                                        Status:
                                    </MyText>
                                    <MyInput size='lg' style={{
                                        width: '100%',
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }} />
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
                                    <MyInput size='lg' style={{
                                        width: '100%',
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }} />
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
                                    <MyInput size='lg' style={{
                                        width: '100%',
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginLeft: '4%',
                                    }} />
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
                                        variant='cinzaClaro'
                                    >
                                        <option>O+</option>
                                        <option>O-</option>
                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
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
            <MyButton onClick={() => { setIsOpen(!isOpen) }} />
        </div>
    )
}
/*
O que falta coloca no modal/BD:
V - Tipo sanguineo;
Filial vinculada;
Status de cadastro;
Cargo;
V - Email;
V - Contato;
V - Contato de emergência;
V - Ultimo acidente sofrido;
*/