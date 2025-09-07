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
                                    width: '100%',
                                }}
                            >
                                <div>
                                    <MyText
                                        style={{
                                            display: "flex",
                                            fontSize: '20px',
                                            fontWeight: 'bold',
                                            justifyContent: 'flex-start',
                                            //marginLeft: '4%'
                                        }}
                                    >
                                        CPF:
                                    </MyText>
                                    <MyInput size='lg' style={{
                                        //display: "flex",
                                        //justifyContent: 'flex-start',
                                        //width: '40%',
                                        //marginLeft: '5%'
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
                                            marginRight: 0
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