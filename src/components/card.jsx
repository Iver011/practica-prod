
import styles from "./card.module.css"
import { FaUsers } from "react-icons/fa6";

function Card({title,total,text}){

    return(
        <div className={styles.container}>
            <FaUsers/>
            <div className={styles.texts}>
            <span className={styles.title}>{title}</span>
            <span className={styles.number}>{total}</span>
            </div>
        </div>
    );

}export default Card;