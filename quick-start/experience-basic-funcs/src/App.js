import styles from './App.module.css';
import Header from './Header';
import Profile from "./Profile";

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <Profile/>
            App
        </div>
    );
}

export default App;
