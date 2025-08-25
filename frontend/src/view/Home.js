import React from 'react';
import { useState } from 'react';
import { MyCanva } from '../components/MyCanvas';

function Home() {
    return (
        <div style={styles.container}>
            <MyCanva />
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
    },
};

export default Home;
