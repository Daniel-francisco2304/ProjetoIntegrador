import { GiHamburgerMenu } from 'react-icons/gi';

export function MyCanva() {
    return (
        <div style={style.container}>
            <text onClick={() => { alert() }}>
                <GiHamburgerMenu size={30} color="white" />
            </text>
        </div>
    );
}

const style = {
    container: {
        flex: 1,
        backgroundColor: '#65a765',
        zindex:999,
    }
}