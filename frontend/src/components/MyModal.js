import React from "react";
import { useState } from "react";
import MyInput from '../components/MyInput'
import MyText from "./MyText";
import MyButton from "./MyButton";


export function MyModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div style={{ padding: 20 }}>
                <button onClick={() => setIsOpen(true)}>Abrir Modal</button>

                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0,0,0,0.5)", // escurece
                                zIndex: 10
                            }}
                            onClick={() => setIsOpen(false)} // fecha clicando no fundo
                        ></div>

                        {/* Conteúdo em destaque */}
                        <div
                            style={{
                                position: "fixed",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                background: "white",
                                padding: 20,
                                borderRadius: 10,
                                zIndex: 20
                            }}
                        >
                            <h2>Modal</h2>
                            <p>Esse é um modal com backdrop nativo!</p>
                            <button onClick={() => setIsOpen(false)}>Fechar</button>
                        </div>
                    </>
                )}
            </div>
            <MyButton onClick={() => { setIsOpen(!isOpen) }} />
            <dialog
                style={{ backgroundColor: '#00000066' }}
                open={isOpen}>
            </dialog>
        </div>
    )
}
{/*<div>
    <MyButton onClick={()=>{setIsOpen(!isOpen)}}/>
    <div>
        {isOpen ? <div
            style={{
                flex:1,
                position: 'absolute',
                top: '50%',
                left: '50%',
                minHeight: '10vh',
                alignItems: 'center',
                alignContent: 'center',
                backgroundColor: "#fff",
                border: "1px solid #000",
                transform: 'translate(-50%, -50%)',
                width: '60%',
                borderRadius: 10,
            }}>
            <form>
                <MyText style={{marginLeft:0}}>Alguma coisa</MyText><br/>
                <MyInput style={{marginBottom:'2vh'}}/>
            </form>
        </div> : false}
    </div>
</div>*/}