import React from 'react';
import { useState } from 'react';
import { MyCanva } from '../components/MyCanvas';
import { MyModal } from '../components/MyModal';

function Home() {
    const [key, setKey] = useState("");
    const handleKeyDown = (event) => {
        setKey(event.key);
    };
    return (
        <div style={styles.container} onKeyDown={handleKeyDown}>
            <MyCanva />
            <MyModal />
            {key && <h2>Pressed Key: {key}</h2>}
            <input
                type="text"
                onKeyDown={handleKeyDown}
                placeholder="Press here..."
            />
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
    },
};

export default Home;
