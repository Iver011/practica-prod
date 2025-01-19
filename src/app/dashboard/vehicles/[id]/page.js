import styles from "@/app/ui/vehicles/singleVehicle.module.css"
import Info from "@/components/info";
import Image from "next/image";
const SingleVehicle=()=>{
    return(

        <div className={styles.main}>
            <span>Vehiculo: 12421421</span>
            <div className={styles.container}>
            <Info campo={"ID Vehiculo"} contenido={"156478979"}></Info>
            <Info campo={"Placa"} contenido={"156478979"}></Info>
            <Info campo={"Nombre Propietario"} contenido={"Carlos Enriquez"}></Info>
            <Info campo={"Tipo"} contenido={"156478979"}></Info>
            <Info campo={"Comunidad"} contenido={"156478979"}></Info>
            <Info campo={"Marca"} contenido={"156478979"}></Info>
            <Info campo={"Color"} contenido={"156478979"}></Info>
            <Info campo={"Modelo"} contenido={"156478979"}></Info>
            <Info campo={"Numero de Chasis"} contenido={"156478979"}></Info>
            <div className={styles.qr}>
            <span className={styles.qrName}>Codigo QR:</span>
            <Image src={"https://upload.wikimedia.org/wikipedia/commons/4/41/QR_Code_Example.svg"} width="250" height="250"
            alt=""></Image>
            </div>
            
            </div>
        </div>
    );


}
export default SingleVehicle;