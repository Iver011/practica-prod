"use client";
import Card from "@/components/card";
import styles from "./page.module.css";
import Rightbar from "@/components/rightbar";
import Transactions from "@/components/transactions";

function Dashboard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                {/* Sidebar dinámico gestionado en Layout */}
                <div className={styles.sidebar}>
                    <Card title={"Numero Total de vehiculos registrados"} total={100000}></Card>
                    <Card title={"Numero transacciones hechas en el dia"} total={200}></Card>
                </div>
                <Transactions />
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
    );
}

export default Dashboard;
