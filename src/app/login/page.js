import style from "./page.module.css"
function LoginPage(){

    return(
        <div className={style.main}>
            <form className={style.form}>
                <h1 id={style["title"]}>Iniciar Sesión</h1>
                <div className={`${style.container} ${style.username}`}>
                    <label className="username-label">
                        Nombre de usuario
                    </label>
                    <input className={style.input} type="text" name="username" placeholder="Ingresa tu nombre de usuario"></input>
                </div>
                <div className={`${style.container} ${style.password}`}>
                    <label className="password-label">
                        Contraseña
                    </label>
                    <input className={style.input} type="password" name="password" placeholder="Ingresa tu contraseña"></input>
                </div>
                <button className={style.button} type="submit">Ingresar</button>
            </form>
        </div>

    );


}export default LoginPage;