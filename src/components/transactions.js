
import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ultimas Compras</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Estado</td>
            <td>Fecha</td>
            <td>Monto</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                Erick Picavia
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.complete}`}>
                Completado
              </span>
            </td>
            <td>14.02.2024</td>
            <td>Bs. 3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                
                Carlos Sanchez
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.complete}`}>Completado</span>
            </td>
            <td>14.02.2024</td>
            <td>Bs. 3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                
                Juan Perez
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.dis}`}>
                Disponible
              </span>
            </td>
            <td>14.02.2024</td>
            <td>Bs. 3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
               
                Jhonatan Chacolla
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.dis}`}>
                Disponible
              </span>
            </td>
            <td>14.02.2024</td>
            <td>Bs. 3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;