import React from 'react';
import { useState } from 'react';
import { MyCanva } from '../components/MyCanvas';

function Home() {
    const [key, setKey] = useState("");
    const handleKeyDown = (event) => {
        setKey(event.key);
    };
    return (
        <div style={styles.container} onKeyDown={handleKeyDown}>
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
