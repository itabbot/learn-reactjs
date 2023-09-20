import {useState} from "react";
import styles from './App.module.css';
import Header from './Header';
import Profile from "./Profile";
import MyButton from "./MyButton";
import Counter from "./Counter";

function App() {
    const [count, setCount] = useState(0)

    function handleCounter() {
        setCount(count + 1);
    }

    return (
        <div className={styles.App}>
            <Header/>
            <Profile/>
            <MyButton/>
            <Counter count={count} onClick={handleCounter}/>
            <Counter count={count} onClick={handleCounter}/>
            App
        </div>
    );
}

export default App;
