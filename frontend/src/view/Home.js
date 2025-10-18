import React, { useState } from 'react';
import { MyCanva } from '../components/MyCanvas';
import MyInput from '../components/MyInput';
import MyText from '../components/MyText';
import { MasCdata } from '../model/util/mascaras';

function Home() {
    const [value, setValue] = useState('');
    const data = new Date();
    return (
        <div style={styles.container}>
            <MyCanva />
            <MyInput value={value} onChange={(e) => setValue(MasCdata(e.target.value))} />
            <br />
            <MyText>
                {value}
                {"\n"}
                {data.toLocaleDateString('pt-BR')}
            </MyText>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
    },
};

export default Home;
