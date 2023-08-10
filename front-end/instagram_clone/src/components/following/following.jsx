import React from "react";
import styles from './following.module.css';

export const Following = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.container_header}>
                <div className={styles.header_image}>
                    <img src="/Account.png" alt="user image" />
                </div>
                <div>Majed Habli</div>
            </div>
            <div className={styles.message}>
                People you follow
            </div>
            <div className={styles.following_list}></div>
        </div>
    )
}