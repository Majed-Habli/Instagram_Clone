import React from "react";
import styles from './following.module.css';
import { Card } from "../shared/user card/userCard";

export const Following = () =>{
    return (
        <div className={styles.container}>
            <Card/>
            <div className={styles.message}>
                People you follow
            </div>
            <div className={styles.following_list}>
                <Card/>
            </div>
        </div>
    )
}