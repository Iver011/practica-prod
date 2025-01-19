import Card from "@/components/card";
import styles from "./page.module.css"
import Rightbar from "@/components/rightbar";
import Transactions from "@/components/transactions";
function Dashboard(){
    return(
        
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card title={"Numero Total de vehiculos registrados"} total={100000}></Card>
                    <Card title={"Numero transacciones hechas en el dia"} total={200}></Card>
                </div>
                <Transactions></Transactions>
            </div>
            <div className={styles.side}>
                <Rightbar/>
            </div>
        </div>
    )

}export default Dashboard;