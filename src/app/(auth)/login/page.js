'use client'
import { FaRegEye,FaIdCard,FaRegEyeSlash   } from "react-icons/fa6";
import style from "./loginPage.module.css"
import { useState } from "react";
import Link from "next/link";
function LoginPage(){

    const [showPassword,setShowPassword]=useState(false)
   
    const changeVisibility = () => {
        setShowPassword((prev) => {
          console.log("Valor anterior:", prev); // Veremos el valor actual antes de cambiarlo
          return !prev; // Invertimos el valor
        });
      };
    return(
       <div className={style.main}>
        <div className={style.left}>
            <form className={style.form}>
                <div className={style.title}>
                <h3>Iniciar Sesion
                </h3>
                <FaIdCard className={style.iconmain}/>
                </div>
                
                <span className={style.text}>Ingresa los datos de tu cuenta</span>
                <input className={style.input} type="text" placeholder="Nombre de usuario"></input>
                
                <div className={style.password}><input className={style.input} type={showPassword?"text":"password"} placeholder="Contraseña"></input>
                
                <span onClick={changeVisibility} className={style.icon}>
        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />} {/* Cambia el icono */}
      </span>
                </div>
                <span className={style.forgot}>¿Olvidaste tu contraseña?</span>
                <button className={style.btn}>Ingresar</button>
            </form>
            <div className={style.register}>
                <p>¿Aun no tienes una cuenta?</p>
                <Link href={"./register"}>
                <p className={style.reg}>Registrarse</p>
                </Link>
                
            </div>
        </div>
        <div className={style.right}>
            <h3>Sistema de Gestion de Abastecimiento de Combustible</h3>
            
        </div>

       </div>
    );


}export default LoginPage;