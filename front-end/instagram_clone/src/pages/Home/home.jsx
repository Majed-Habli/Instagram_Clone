import React from "react";
import styles from './home.module.css';
import { Navbar } from "../../components/side navbar/navbar";
import { Post } from "../../components/post/post";
import { Following } from "../../components/following/following";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Navbar/>
            </div>
            <div className={styles.container_body}>
                <div className={styles.post}>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
                <div className={styles.offer}>
                    <Following/>
                </div>
            </div>
        </div>
    )
}

export default Home;