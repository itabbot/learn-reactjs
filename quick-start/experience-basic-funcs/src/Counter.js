export default function Counter(props) {
    const {count, onClick} = props
    return (
        <button onClick={onClick}>
            {count}
        </button>
    );
}
