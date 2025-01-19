import styles from "./navbar.module.css";
import { FaSearch,FaRegComment,FaRegBell  } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";


function NavBar(){

    return(
        <div className={styles.main}>
            <div className={styles.title}>{"DashBoard"}</div>
            <div className={styles.menu}>
                <div className={styles.search}>
                    <FaSearch/>
                    <input type="text" placeholder="Ingresa un nombre de usuario..." className={styles.input}></input>
                </div>
                <div className={styles.icons}>
                    <FaRegComment />
                    <FaRegBell /> 
                    <BiWorld/> 
                </div>
            </div>
        </div>
    );
}export default NavBar;