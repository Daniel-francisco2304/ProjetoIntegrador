import React from "react";
import { useState } from "react";
import MyInput from '../components/MyInput'
import MyText from "./MyText";
import MyButton from "./MyButton";
import { BsFloppy, BsX } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { RxCross1 } from "react-icons/rx";


export function MyModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [nome, setNome] = useState('example');
    const [cpf, setCpf] = useState('example');
    const [dtContratacao, setDtContratacao] = useState('example');

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
                                        Data da Contratação:
                                    </MyText>
                                    <MyInput size='lg' style={{
                                        width: '100%',
                                    }} />
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
                                            gap: "6px",
                                            justifyContent: "center",
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