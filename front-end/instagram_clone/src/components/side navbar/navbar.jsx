import React, { useState } from "react";
import styles from './navbar.module.css';
import { Popup } from "../upload post/popup";

export const Navbar = () =>{
    const [showPopUp, setShowPopUp] = useState(false);

    const showPopup = () =>{
        setShowPopUp(true);
        console.log(showPopUp)
    }
    return (
        <div className={styles.container}>
            <div className={styles.nav_header}>
                <img src="/logo.png" alt="" />
            </div>
            <div className={styles.nav_body}>
                <div className={styles.nav_link}>
                    <img src="/Home.png" alt="home icon" />
                    <div>Home</div>
                </div>
                <div className={styles.nav_link}>
                    <img src="/Search.png" alt="home icon" />
                    <div>Search</div>
                </div>
                <div className={styles.nav_link}>
                    <img src="/Adventures.png" alt="home icon" />
                    <div>Explore</div>
                </div>
                <div className={styles.nav_link}>
                    <img src="/Reel.png" alt="home icon" />
                    <div>Reels</div>
                </div>
                <div className={styles.nav_link}>
                    <img src="/Messenger.png" alt="home icon" />
                    <div>Messages</div>
                </div>
                <div className={styles.nav_link}>
                    <img src="/Heart.png" alt="home icon" />
                    <div>Notifications</div>
                </div>
                <div className={styles.nav_link} onClick={showPopup}>
                    <img src="/AddNew.png" alt="home icon" />
                    <div>Create</div>
                </div>
                <div className={styles.nav_link}>
                    <img src="/Account.png" alt="home icon" />
                    <div>Profile</div>
                </div>
                <div className={styles.nav_link}>
                    <img src="/Menu.png" alt="home icon" />
                    <div>More</div>
                </div>
            </div>
            <div className={styles.popup_body}>
                <div className={styles.popup}>
                    {showPopUp && <Popup isPressed={setShowPopUp}/>}
                </div>
            </div>
        </div>
    )
}