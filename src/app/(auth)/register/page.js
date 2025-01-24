import styles from "./registerPage.module.css"
import Image from "next/image";
function RegisterPage(){

    return(
        <div className={styles.main}>
            <div className={styles.left}>
                <h3 className={styles.title}>
                    Sistema de Gestion de Abastecimiento de Combustible
                </h3>
                <Image src="./img2.svg" width="300" height="300" alt=""></Image>

            </div>
            <div className={styles.right}>
                <h3 className={styles.register}>Registrarse</h3>
                <p>Ingresa tus datos</p>
                <form className={styles.form}>
                <label className={styles.label}>Nombres:</label>
                <input className={styles.input} type="text" placeholder="Nombres"></input>
                <label className={styles.label}>Apellidos:</label>
                <input className={styles.input} type="text" placeholder="Apellidos"></input>
                <label className={styles.label}>Carnet de Identidad:</label>
                <input className={styles.input} type="text" placeholder="Carnet de Identidad"></input>
                <label className={styles.label}>Comunidad a la que perteneces:</label>
                <input className={styles.input} type="text" placeholder="Comunidad"></input>
                <label className={styles.label}>Fecha de Nacimiento</label>
                <input className={styles.input} type="date"></input>
                <label className={styles.label}>Ingresa un nombre de usuario:</label>
                <input className={styles.input} type="text" placeholder="Nombre de Usuario"></input>
                <label className={styles.label}>Ingresa una contraseña:</label>
                <input className={styles.input} type="text" placeholder="Ingresa una Contraseña"></input>
                <button className={styles.btn}>Registrar Usuario</button>
                </form>
            </div>
        </div>

    );
}export default RegisterPage;