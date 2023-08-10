import React from "react";
import styles from './post.module.css';

export const Post = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.post_header}>
                <div className={styles.profile}>
                    <img src="/Account.png" alt="user image" />
                </div>
                <div className={styles.user_details}>User name + date</div>
                <div className={styles.settings}>
                    <img src="/settings.png" alt="settings image" />
                </div>
            </div>
            <div className={styles.body}>
                <img src="/post.png" alt="post one" />
            </div>
            <div className={styles.interactables}>
                <img src="/Heart.png" alt="" />
                <div>1223k</div>
            </div>
        </div>
    )
}