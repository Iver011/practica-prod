import styles from "@/app/ui/users/singleUser.module.css"
import Info from "@/components/info";
function UserPage(){

    return(
        <div className={styles.main}>
            <span className={styles.title}>Usuario:1313453435</span>
            <div className={styles.info}>
                <div className={styles.datos}>
                <span>Datos Generales:</span>
                <Info campo={"Nombre"} contenido={"Erick"}></Info>
                <Info campo={"Apellido"} contenido={"Picavi Saravia"}></Info>
                <Info campo={"Fecha de Nacimiento"} contenido={"0/0/00"}></Info>
                <Info campo={"Carnet de Identidad"} contenido={"1345612313"}></Info>
                </div>
                
                <div className={styles.contacts}>
                    <span>Contactos:</span>
                    <Info campo={"Correo Electronico"} contenido={"erick123@gmail.com"}></Info>
                    <Info campo={"Telefono"} contenido={"72812345"}></Info>
                    <Info campo={"Direccion"} contenido={"calle 123, villa nose"}></Info>
                </div>
                
                <div className={styles.vehiculos}>
                <span>Vehiculos:</span>
                    <Info campo={"Vehiculos"} contenido={"fdsafda"}></Info>
                </div>
            </div>
        </div>
    );

}export default UserPage;