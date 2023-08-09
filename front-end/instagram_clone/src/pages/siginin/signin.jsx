import React, { useState } from "react";
import styles from './signin.module.css';

const Signin = () =>{
    const [validator, setValidator] = useState('');
    const [password, setPassword] = useState('');

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
                    <div className={styles.top_container}>
                        <div className={styles.logo_container}>
                            <img src="/logo.png" alt="logo" />
                        </div>
                        <div className={styles.input_container}>
                            <input type="text" placeholder="Email" value={validator} onChange={ e=> setValidator(e.target.value) }/>
                            <input type="password" placeholder="Password" value={password} onChange={ e=> setPassword(e.target.value) }/>
                            <button>Log in</button>
                        </div>
                        <div className={styles.seperator}>
                            <div className={styles.line}></div>
                            <div>or</div>
                            <div className={styles.line}></div>
                        </div>
                    </div>
                    <div className={styles.bottom_container}></div>
                </div>
            </div>
        </div>
    )
}

export default Signin;