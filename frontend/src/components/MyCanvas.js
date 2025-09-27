import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsBellFill, BsBoxSeamFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export function MyCanva() {
    const [isOpen, setIsOpen] = useState(false);
    const [isNoti, setIsNoti] = useState(false);
    const navigate = useNavigate();

    return (
        <div style={style.view}>
            <div style={style.container}>
                <text style={style.hamburger}>
                    <GiHamburgerMenu
                        size={30}
                        color="white"
                        onClick={() => { setIsOpen(!isOpen) }}
                    />
                </text>
                <h3
                    style={style.hamburger}
                    onClick={() => { navigate("/Home") }}
                >
                    SGTST
                </h3>
                <text
                    style={style.hamburger}
                    onClick={() => { setIsNoti(!isNoti) }}>
                    <BsBellFill size={30} color="white" />
                </text>
            </div>
            <div>
                <AnimatePresence>
                    {
                        isOpen && (
                            <motion.div
                                style={style.offCavas}
                                initial={{ x: -300, opacity: 1 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -400, duration: 0.15, opacity: 1 }}
                                transition={{ duration: 0.35, type: "tween", }}
                            >
                                <text
                                    style={style.link}
                                    onClick={() => { navigate("/Home") }}
                                >
                                    <i className="bi bi-house-door-fill" style={style.icon}></i>
                                    Home
                                </text>
                                <text
                                    style={style.link}
                                    onClick={() => { navigate("/Funcionarios") }}
                                >
                                    <i className="bi bi-person-lines-fill" style={style.icon}></i>
                                    Funcionarios
                                </text>
                                <text
                                    style={style.link}
                                    onClick={() => { navigate("/epi") }}
                                >
                                    <i className="bi bi-headset-vr" style={style.icon}></i>
                                    EPI's
                                </text>
                                <text
                                    style={style.link}
                                    onClick={() => { navigate("/Fornecedor") }}
                                >
                                    <i className="bi bi-box-seam-fill" style={style.icon}></i>
                                    Fornecedor
                                </text><text
                                    style={style.link}
                                    onClick={() => { navigate("/Filial") }}
                                >
                                    <i className="bi bi-buildings-fill" style={style.icon}></i>
                                    Filiais
                                </text>
                                <text
                                    style={style.link}
                                    onClick={() => { navigate("/Acidente") }}
                                >
                                    <i className="bi bi-exclamation-triangle-fill" style={style.icon}></i>
                                    Acidentes
                                </text>
                                <text
                                    style={style.linkOut}
                                    onClick={() => { navigate("/") }}
                                >
                                    <i className="bi bi-box-arrow-right" style={style.icon}></i>
                                    Sair
                                </text>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>

            <div>
                <AnimatePresence>
                    {
                        isNoti && (
                            <motion.div
                                style={style.offNotif}
                                initial={{ x: (window.innerWidth), opacity: 1 }}
                                animate={{ x: (window.innerWidth) - (window.innerWidth * 0.2), opacity: 1 }}
                                exit={{ x: (window.innerWidth), duration: 0.15, opacity: 1 }}
                                transition={{ duration: 0.35, type: "tween", }}
                            >
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>
        </div>
    );
}
console.log(window.innerWidth);
const style = {
    view: {
        width: '100%',
    },
    container: {
        backgroundColor: '#65a765',
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        minWidth: 500,
    },
    hamburger: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0.5 rem',
        cursor: "pointer",
        marginLeft: '1rem',
        marginRight: '1rem',
    },
    offCavas: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#65a765',
        position: 'fixed',
        height: '100%',
        alignItems: 'center',
        width: '20%',
        minWidth: 250,
    },
    offNotif: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#e6ffe6',
        position: 'fixed',
        height: '100%',
        alignItems: 'center',
        width: '20%',
        borderLeft: '2px solid #d3d3d3',
        borderRight: '2px solid #d3d3d3',
        minWidth: 250,
    },
    link: {
        display: 'flex',
        flexDirection: 'row',
        borderTop: "1px solid #d3d3d3",
        borderBottom: "1px solid #d3d3d3",
        padding: "1rem ",
        cursor: "pointer",
        fontSize: '1rem',
        fontWeight: "bold",
        color: '#fff',
        width: "80%",
        alignItems: 'center',
        textAlign: "center",
    },
    linkOut: {
        display: 'flex',
        borderTop: "1px solid #d3d3d3",
        borderBottom: "1px solid #d3d3d3",
        padding: "1rem",
        width: "80%",
        cursor: "pointer",
        fontSize: '1rem',
        fontWeight: "bold",
        color: '#fff',
    },
    icon: {
        fontSize: '1.2rem',
        marginRight: '1rem'
    },
}