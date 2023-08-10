import React from "react";
import styles from './search.module.css';
import { Card } from "../shared/user card/userCard";

export const Searchbar = () =>{
    const buttonText = "follow";

    return(
        <div className={styles.container}>
            <div className={styles.container_header}>
                <div>Search</div>
                <input type="text" placeholder="Search" />
            </div>
            <div className={styles.body}>
                <Card button_title={buttonText}/>
            </div>
        </div>
    )
}