
function MyButton(props) {
    return (
        <button
            style={style.mybotton|| props.color}
            onClick={props.action}
            value={props.value}
            onChange={props.onChange}
        >
            {props.title}
        </button>
    );
}

const style = {
    mybotton: {
        padding: '12px',
        backgroundColor: '#90EE90',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        minWidth: '200px',
    }

}
export default MyButton