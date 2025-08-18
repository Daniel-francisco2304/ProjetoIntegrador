// src/pages/Home.js
import React from 'react';
import { useState } from 'react';
import OffCanvas from '../components/offcanvas';
import OffCanvasRight from '../components/OffCanvasRight';
import Navbar from '../components/navbar';

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
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '10%',
    },
};

export default Home;
