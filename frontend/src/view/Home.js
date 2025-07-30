// src/pages/Home.js
import React from 'react';
import { useState } from 'react';
import OffCanvas from '../components/offcanvas';
import OffCanvasRight from '../components/OffCanvasRight';
import Navbar from '../components/navbar';
import ViewFuncionario from '../components/ViewFuncionarios';
function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    const toggleNotif = () => setIsNotifOpen(!isNotifOpen);

    return (
        <div style={styles.container}>
            <div>
                <Navbar
                    toggleMenu={toggleMenu}
                    toggleNotif={toggleNotif}
                />
                <OffCanvas
                    isOpen={menuOpen}
                    toggleMenu={toggleMenu}
                />
                <OffCanvasRight
                    isOpen={isNotifOpen}
                    toggleNotif={toggleNotif}
                />
            </div>
            <ViewFuncionario/>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '10%',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '2rem',
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
    },
    button: {
        padding: '1rem 2rem',
        fontSize: '1rem',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '8px',
        minWidth: '200px',
    },
};

export default Home;
