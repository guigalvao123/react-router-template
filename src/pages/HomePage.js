import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {goToProfilePage} from "../routes/coordinator"

function HomePage() {
  const navigate = useNavigate()

  return (
    <main>
      <Header />
      <h1>Página Inicial</h1>
      <button onClick={() => goToProfilePage(navigate, "guilherme")}>Ir para Pagina perfil</button>
    </main>
  );
}

export default HomePage;
