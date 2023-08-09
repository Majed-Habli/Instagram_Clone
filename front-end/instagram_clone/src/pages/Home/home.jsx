import React from "react";
import styles from './home.module.css';
import { Navbar } from "../../components/side navbar/navbar";
const Home = () => {
    return (
        <div className={styles.conatiner}>
            <div className={styles.navbar}>
                <Navbar></Navbar>
            </div>
        </div>
    )
}

export default Home;