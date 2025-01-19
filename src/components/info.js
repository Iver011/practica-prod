import styles from "./info.module.css"

const Info=({campo,contenido})=>{


    return(
        <div className={styles.att}>
                    <div className={styles.campo}>
                        {campo}
                    </div>
                    <div className={styles.content}>
                        {contenido}
                    </div>
                </div>
    );
}
export default Info;