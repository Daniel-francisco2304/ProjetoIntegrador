import { GiHamburgerMenu } from 'react-icons/gi';

export function MyCanva() {
    return (
        <div style={style.container}>
            <text
                style={style.hamburger}
                onClick={() => { alert() }}>
                <GiHamburgerMenu size={30} color="white" />
            </text>
            <text style={style.hamburger}>
                SGTST
            </text>
            <text
                style={style.hamburger}
                onClick={() => { alert() }}>
                <GiHamburgerMenu size={30} color="white" />
            </text>
        </div>
    );
}

const style = {
    container: {
        display:'flex',
        justifyContent: 'space-between',
        backgroundColor: '#65a765',
        width:'100%',
    },
    hamburger: {
        //flex: 1,
        display:'flex',
        justifyContent: 'flex-start',
        alignItems:'center',
        padding:'1rem',
        marginLeft:10,
        marginRight:10,
    }
}