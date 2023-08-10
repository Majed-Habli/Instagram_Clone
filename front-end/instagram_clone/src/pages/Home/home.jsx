import React from "react";
import styles from './home.module.css';
import { Navbar } from "../../components/side navbar/navbar";
import { Post } from "../../components/post/post";

const Home = () => {
    return (
        <div className={styles.conatiner}>
            <div className={styles.navbar}>
                <Navbar></Navbar>
            </div>
            <div className={styles.body}>
                <Post/>
            </div>
            <div className={styles.offer}>hello</div>
        </div>
    )
}

export default Home;