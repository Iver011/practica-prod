import styles from "@/app/ui/users/addUser.module.css"

const AddPage=()=>{


    return (
        <div className={styles.main}>
            <h2>Agregar Persona</h2>
            <form className={styles.form}>
            <div className={styles.campo}>
                <label className={styles.label}>Nombre:</label>
                <input className={styles.input}></input>
            </div>
            <div className={styles.campo}>
                <label className={styles.label}>Apellido:</label>
                <input className={styles.input}></input>
            </div>
            <div className={styles.campo}>
                <label className={styles.label}>Carnet de Identidad:</label>
                <input className={styles.input}></input>
            </div>
            
            <div className={styles.campo}>
                <label className={styles.label}>Correo Electronico:</label>
                <input className={styles.input}></input>
            </div>
            
            <div className={styles.campo}>
                <label className={styles.label}>Direccion:</label>
                <input className={styles.input}></input>
            </div>
            <div className={styles.extras}>
            <div className={styles.campo}>
                <label className={styles.label}>Fecha de Nacimiento:</label>
                <input className={styles.input} type="date"></input>
            </div>
            <div className={styles.campo}>
                <label className={styles.label}>Numero de Telefono:</label>
                <input className={styles.input}></input>
            </div>
            </div>
            <button className={styles.btn}>Agregar</button>
            </form>
        </div>
    );
}
export default AddPage;