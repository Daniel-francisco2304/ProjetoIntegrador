import React from 'react';
import { useState } from 'react';
import { MyCanva } from '../components/MyCanvas';
import { MyModal } from '../components/Modal/MyModal';

function Home() {
    const [key, setKey] = useState(true);
    const handleKeyDown = (event) => {
        setKey(event.key);
    };
    return (
        <div style={styles.container} onKeyDown={handleKeyDown}>
            <MyCanva />
            <MyModal setIsOpen={key}/>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
    },
};

export default Home;
