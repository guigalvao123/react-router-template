import { useNavigate } from "react-router-dom";
import {goToProfilePage} from "../routes/coordinator"

const LoginPage =() =>{

    const navigate = useNavigate()


    return(
        <main>
            <h1>Pagina de Login</h1>
            <input placeholder="Digite seu nome"></input>
            <input placeholder="Digite sua senha"></input>
            <button onClick={() => goToProfilePage(navigate, "guilherme")}>Ir para Pagina perfil</button>
        </main>
        
    )
}

export default LoginPage;