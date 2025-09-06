import React from 'react';
import { useState } from 'react';
import { MyCanva } from '../components/MyCanvas';
import { MyModal } from '../components/MyModal';

function Home() {
    return (
        <div style={styles.container}>
            <MyCanva />
            <MyModal />
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
    },
};

export default Home;
