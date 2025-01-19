import styles from "@/app/ui/users/users.module.css"
import Link from "next/link";
import { FaFilter,FaSearch  } from "react-icons/fa";

function UsersPage(){

    return(
        <div className={styles.container}>
            <div className={styles.top}>
            <div className={styles.search}>
                    <FaSearch/>
                    <input className={styles.input} placeholder="Ingresa un nombre.."></input>
                </div>
                <div className={styles.options}>
                    <Link href={"/dashboard/vehicles/add"}>
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
                    <td>ID</td>
                        <td>Modelo</td>
                        <td>Nro Chasis</td>
                        <td>Tipo</td>
                        <td>Nombre Propietario</td>
                    </tr>
                </thead>
            </table>
        </div>
    );

}export default UsersPage;