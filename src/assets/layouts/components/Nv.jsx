import "./styles/nv.css";
import { Link as LinkRouter } from "react-router-dom";

export default function Nv() {
  return (
    <div className="nv">
      <img src="ACC3.png" alt="logo tsl" className="acc3" />
      <nav className="nvbar">

        <LinkRouter to={'/index'}>
          <a href="#">Inicio</a>
        </LinkRouter>

        <LinkRouter to={'/profile'}>
          <a href="#">Cursos</a>
        </LinkRouter>

        <a href="#">Membresia</a>
        <a href="#">Contacto</a>
        <a href="#">Usuario</a>

      </nav>
      <img src="Cart.png" alt="user" className="cart" />
    </div>
  );
}
