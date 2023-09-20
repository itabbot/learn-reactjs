export default function MyButton() {
    function handleClick() {
        alert('你点击了我!');
    }

    return (
        <button onClick={handleClick}>
            点一下试试
        </button>
    );
}
