import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../App.css";
import "../css/cardHome.css";

const Home = () => {
  return (
    <div class="container-card-title">
      <div class="container-title-logo">
        <img style={{ width: "50px" }} src={logo} alt="Logo" />
        <h1 style={{ color: "#f26533", fontSize: "40px" }}>
          Relatórios Global Live
        </h1>
      </div>
      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content">
              <h2></h2>
              <h3>Chamados em Aberto</h3>
              <p></p>
              <Link id="buttonHome" to="/chamadosabertos">Acessar</Link>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="box">
            <div class="content">
              <h2></h2>
              <h3>Chamados Fechados</h3>
              <p></p>
              <Link id="buttonHome" to="/chamadosfechados">Acessar</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
