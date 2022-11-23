import { useNavigate, useParams } from "react-router-dom";
import { goToHomePage, goToProfilePage, goToLoginPage } from "../routes/coordinator";

function Header() {

  const navigate = useNavigate()

  const pathParams = useParams()

  console.log(pathParams)

  return (
    <header>
      <button onClick={() => goToHomePage(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => goToProfilePage(navigate, "guilherme")}>
        Ir para página de perfil
      </button>
      <button onClick={() => goToLoginPage(navigate)}>
        Ir para pagina de login
      </button>
    </header>
  );
}

export default Header;
