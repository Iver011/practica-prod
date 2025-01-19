import styles from "@/app/ui/users/addUser.module.css"

const AddVehicle=()=>{


    return (
        <div className={styles.main}>
            <h2>Agregar Vehiculo</h2>
            <form className={styles.form}>
            <div className={styles.campo}>
                <label className={styles.label}>Placa:</label>
                <input className={styles.input}></input>
            </div>
            <div className={styles.campo}>
                <label className={styles.label}>Numero de Chasis:</label>
                <input className={styles.input}></input>
            </div>
            <div className={styles.campo}>
                <label className={styles.label}>Tipo:</label>
                <input className={styles.input}></input>
            </div>
            
            <div className={styles.campo}>
                <label className={styles.label}>Comunidad:</label>
                <input className={styles.input}></input>
            </div>
            
            <div className={styles.campo}>
                <label className={styles.label}>Color:</label>
                <input className={styles.input}></input>
            </div>
            <div className={styles.campo}>
                <label className={styles.label}>Marca:</label>
                <input className={styles.input}></input>
            </div>
            <div className={styles.campo}>
                <label className={styles.label}>Modelo:</label>
                <input className={styles.input}></input>
            </div>
            <div className={styles.campo}>
                <label className={styles.label}>Carnet del Propietario:</label>
                <input className={styles.input}></input>
            </div>
            <button className={styles.btn}>Agregar</button>
            </form>
        </div>
    );
}
export default AddVehicle;