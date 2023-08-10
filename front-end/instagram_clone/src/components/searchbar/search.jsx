import React from "react";
import styles from './search.module.css';

export const Searchbar = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.container_header}>
                <div>Search</div>
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}