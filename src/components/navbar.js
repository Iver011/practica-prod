import styles from "./navbar.module.css";
import { FaBars, FaSearch, FaRegComment, FaRegBell } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

function NavBar({ toggleSidebar }) {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                {/* Llamada a la función toggleSidebar */}
                <FaBars className={styles.bars} onClick={toggleSidebar} />
                <div>{"DashBoard"}</div>
            </div>
            <div className={styles.menu}>
                <div className={styles.search}>
                    <FaSearch />
                    <input
                        type="text"
                        placeholder="Ingresa un nombre de usuario..."
                        className={styles.input}
                    />
                </div>
                <div className={styles.icons}>
                    <FaRegComment />
                    <FaRegBell />
                    <BiWorld />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
