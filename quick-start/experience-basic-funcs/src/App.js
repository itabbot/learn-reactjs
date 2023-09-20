import styles from './App.module.css';
import Header from './Header';
import Profile from "./Profile";
import MyButton from "./MyButton";

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <Profile/>
            <MyButton/>
            App
        </div>
    );
}

export default App;
