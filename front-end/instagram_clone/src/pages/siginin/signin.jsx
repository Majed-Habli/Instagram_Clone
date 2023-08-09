import React from "react";
import styles from './signin.module.css';

const Signin = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.container_body}>
                <div className={styles.body_left}>
                    <div className={styles.image_container}>
                        <img className={styles.image1} src="/leftIphoneImage.png" alt="left_iphone_image" />
                        <img className={styles.image2} src="/rightIphoneImage.png" alt="right_iphone_image" />
                    </div>
                </div>
                <div className={styles.body_right}>
                    {/* //component */}
                    <div className={styles.top_container}></div>
                    <div className={styles.bottom_container}></div>
                </div>
            </div>
        </div>
    )
}

export default Signin;