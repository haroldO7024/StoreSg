export const Login = () => {
    return (
        <div className="p-8 min-h-screen" style={{width: "40rem" }}>
            <form className="flex flex-col gap-2 border-2 h-96 rounded bg-gray-200 fs-2" style={{width: "25rem"}}>
                <h2 className="text-center text-2xl text-bold mt-4 mb-4">Ingresa a tu cuenta</h2>
                    <input type="text" placeholder="Usuario" 
                        className="border-2 p-2 rounded-x1 mx-auto" style={{width: "20rem"}} name="username"/>
                    <input type="password" placeholder="Contraseña" 
                        className="border-2 p-2 rounded-x1 mx-auto" style={{width: "20rem"}} name="password"/>
                    <input type="checkbox" className="flex flex-start" name="remember" />
                    <span className="mx-auto">Recordarme</span>
                    <a href="#" className="text-blue-500 text-center">¿Olvidastes tu contraseña</a>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-xl mx-auto" style={{width: "20rem"}}>Ingresar</button>
            </form>
        </div>
    )
}
