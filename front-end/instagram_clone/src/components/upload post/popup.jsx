import React from "react";
import styles from  './popup.module.css';

export const Popup = ({isPressed}) =>{

    const hideModel =() =>{
        isPressed(prev => !prev);
    }

    return (
        <div className={styles.container}>
            <div className={styles.popup_container}>
                <img src="/x.png" alt="close image" onclick={hideModel}/>
            </div>
        </div>
    )
}