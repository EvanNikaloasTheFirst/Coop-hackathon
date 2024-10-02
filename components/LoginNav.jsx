import React, { useState } from 'react';
import styles from "@/styles/Navbar.module.css";
import { useRouter } from 'next/router';

export default function LoginNav() {
    const router = useRouter();
    const [toogleNav, setToggleNav] = useState(false);

    function toggleMenu() {
        setToggleNav(prevState => !prevState);
    }

    async function login() {    

    }
   

    return (
        <header className={styles.header}>
        <a href="/"  className={styles.logo} >
        <img src="/images/co-op-logo.png" alt="Co-op logo" 
        className={styles.logo}/>
        </a>
            <nav className={styles.navbar}>
            <a href='/login' onClick={login}>Log in</a> 
                <a href='/createproject'>What is this?</a>
                <a href='/help'>Help</a>
                <a href='https://www.co-operative.coop/' onClick={login}>Co-op Home</a> 
              
            </nav>

            <button className={styles.navBtn} onClick={toggleMenu}>
                <img src="/images/menu.png" alt="Menu" className={styles.imgNav} />
            </button>

            {/* Conditionally render menu based on toogleNav state */}
            <div className={styles.Links} style={{ display: toogleNav ? 'flex' : 'none' }}>
            <a href='/createproject'>What is this?</a>
                <a href='/help'>Help</a>
                <a href='https://www.co-operative.coop/' onClick={login}>Co-op Home</a> 
            </div>
        </header>
    );
}
