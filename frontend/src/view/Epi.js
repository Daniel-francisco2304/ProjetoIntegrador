import { MyCanva } from '../components/MyCanvas';

function EpiScreen() {


    return (
        <div style={styles.container}>
            <MyCanva/>
        </div>
    );
}

const styles = {
    container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    },
};

export default EpiScreen;
