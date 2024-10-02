import React, { useState } from 'react';
import styles from "@/styles/Navbar.module.css";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
    const router = useRouter();
    const [toogleNav, setToggleNav] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function toggleMenu() {
        setToggleNav(prevState => !prevState);
    }

    function toggleDropdown() {
        setDropdownOpen(prevState => !prevState);
    }

    async function login() {    
        // login logic here
    }

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <img src="/images/co-op-logo.png" alt="Co-op logo" className={styles.logo}/>
            </Link>
            <div className={styles.dropdown}>
                <button className={styles.dropdownBtn} onClick={toggleDropdown}>
                    Menu
                </button>
                {dropdownOpen && (
                    <div className={styles.dropdownContent}>
                <Link href='/'>Home</Link>
                <Link href='/dashboard'>Dashboard</Link>
                <Link href='/what-is-this'>What is this</Link>
                <Link href='/help'>Help</Link>
                <a href='https://www.co-operative.coop/' onClick={login}>Co-op Home</a>
                    </div>
                )}
            </div>

            <button className={styles.navBtn} onClick={toggleMenu}>
                <img src="/images/menu.png" alt="Menu" className={styles.imgNav} />
            </button>

            {/* Conditionally render menu based on toogleNav state */}
            <div className={styles.Links} style={{ display: toogleNav ? 'flex' : 'none' }}>
                <Link href='/dashboard'>Dashboard</Link>
                <Link href='/allproject'>Projects</Link>
                <Link href='/createproject'>Create a project!</Link>
                <Link href='/settings'>Settings</Link>
            </div>
        </header>
    );
}