import Sidebar from "@/components/sidebar";
import styles from "./layout.module.css"
import NavBar from "@/components/navbar";
const Layout=({children})=>{


return (
    <div className={styles.container}>
        <div className={styles.menu}>
        <Sidebar></Sidebar>
    </div>
    
    <div className={styles.content}>
        <NavBar></NavBar>{children}</div>
    </div>
    
);

}
export default Layout