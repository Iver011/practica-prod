import styles from "@/app/ui/users/users.module.css"
import { FaFilter,FaSearch  } from "react-icons/fa";
import Link from "next/link";
function UsersPage(){

    return(
        <div className={styles.container}>
            <div className={styles.top}>
            <div className={styles.search}>
                    <FaSearch/>
                    <input className={styles.input} placeholder="Ingresa un nombre.."></input>
                </div>
                <div className={styles.options}>
                <Link className={styles.link} href={"/dashboard/users/add"}>
                <button className={styles.add}>Agregar</button></Link>
                
                <div className={styles.filter}>
                    <FaFilter/>
                    <span>Filtrar</span>
                </div>
                </div>
                
                
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                    <td>CI</td>
                        <td>Nombre</td>
                        <td>Apellidos</td>
                        <td>Estado</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
            </table>
        </div>
    );

}export default UsersPage;