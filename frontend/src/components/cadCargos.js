import { useState } from "react";
import { BsFloppy } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { RxCross1 } from "react-icons/rx";

import MyText from "./MyText";
import MyButton from "./MyButton";
import MyInput from '../components/MyInput'
import { postCargo } from "../model/cargo";

export function CadCargos({ openIs, setOpenIs, setCargo }) {
    const [nome, setNome] = useState('')
    const cadastrarCargo = async () => {
        try {
            if (nome === '') {
                alert('campos vazios');
                setCargo('1');
                return;
            }
            const promise = await postCargo(nome);
            console.log(promise);
            alert("Cargo salvo com sucesso!");
        } catch (error) {
            alert(error)
            return;
        }
    }
    return (
        <div>
            <div>
                {openIs && (
                    <>
                        <div
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#00000080",
                                zIndex: 21
                            }}
                            onClick={() => { setOpenIs(false); }}
                        ></div>
                        {/*<form onSubmit={(e) => { e.preventDefault(); cadastrarCargo(nome) }}>*/}
                        <div
                            style={{
                                position: "fixed",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                background: "white",
                                width: '30%',
                                minWidth: 375,
                                alignContent: 'center',
                                alignItems: 'center',
                                padding: 20,
                                borderRadius: 10,
                                zIndex: 22
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
                                Cargo:
                            </MyText>

                            <MyInput size='lg'
                                value={nome}
                                onChange={(e) => { setNome(e.target.value) }}
                                style={{ marginLeft: '5%', }}
                            /><div style={{
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
                                        //type="submit"
                                        onClick={() => {
                                            cadastrarCargo(nome);
                                            setCargo('-1');
                                            setOpenIs(false)
                                        }}
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
                                            setOpenIs(false);
                                            setCargo('-1');
                                        }}
                                    >
                                    </MyButton>
                                </IconContext.Provider>
                            </div>
                        </div>
                        {/*</form>*/}
                    </>
                )}
            </div>
        </div >
    )
}