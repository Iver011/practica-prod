'use client'
import Sidebar from "@/components/sidebar";
import styles from "./layout.module.css";
import NavBar from "@/components/navbar";
import { useState } from "react";

const Layout = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className={styles.container}>
            {/* Sidebar con visibilidad dinámica */}
            <div className={`${styles.menu} ${showSidebar ? styles.active : ""}`}>
                <Sidebar  className={styles.bar}/>
            </div>

            {/* Contenido principal */}
            <div className={styles.content}>
                {/* Pasamos toggleSidebar como prop */}
                <NavBar toggleSidebar={toggleSidebar} />
                {children}
            </div>
        </div>
    );
};

export default Layout;
