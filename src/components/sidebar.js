'use client'
import MenuLink from "./menuLink";
import styles from "./sidebar.module.css"
import {FaRegUser,FaRegNewspaper,FaCar,FaRegBookmark,FaRegFilePdf,FaRegSun,FaQuestionCircle,FaBars  } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const SideBar=()=>{
    
    const pathname=usePathname()
    console.log(pathname)
const menuItems=[
    {
        title:"Paginas",
        list:[
            {
                title:"Dashboard",
                icon:<FaRegNewspaper />,
                path:"/dashboard"
                
            },
            {
                title:"Usuarios",
                icon:<FaRegUser/>,
                path:"/dashboard/users"
            },
            {
                title:"Vehiculos",
                icon:<FaCar/>,
                path:"/dashboard/vehicles"
            }
        ]
    },
    {
        title:"Analisis",
        list:[
            /*{
                title:"Resumen",
                icon:<FaRegBookmark />
            },*/
            {
                title:"Reporte",
                icon:<FaRegFilePdf/>,
                path:"/dashboard/reports"
            }
        ]
    },
    {
        title:"Usuario",
        list:[
            {
                title:"Configuracion",
                icon:<FaRegSun />,
                path:"/dashboard/config"
            },
            {
                title:"Ayuda",
                icon:<FaQuestionCircle/>,
                path:"/dashboard/help"
            }
        ]
    }
]

    return(
        <div className={styles.main}>
            <div className={styles.user}>
                <Image src={"/next.svg"} alt="" width="50" height="50"></Image>
                <div className={styles.info}>
                <h4>Iver Mamani Cordero</h4>
                <h5 className={styles.rol}>Administrador</h5>
                </div>
            </div>
            
                <ul className={styles.list}>
                    {menuItems.map((cat)=>(
                        <li key={cat.title} className={styles.elemento}>
                            <span className={styles.cat}>
                                {cat.title}
                                {cat.list.map((item)=>(
                                    <Link href={item.path} className={styles.link} key={item.title}>
                                    <div key={item.title} className={`${styles.item} ${pathname===item.path ? styles.active:''}`}>{item.title}{item.icon}</div></Link>
                                ))}
                            </span>
                        </li>
                    ))}
                    <button className={styles.logout}>
                    <CiLogout/> Salir
                </button>
                </ul>
                
                
            
        </div>
    );
}
export default SideBar;