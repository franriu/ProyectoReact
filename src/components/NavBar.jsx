import { CartWidget } from "./CartWidget";

export const NavBar = () => (
  <div>
    <img src="https://images.unsplash.com/photo-1577655199646-736691c95b13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pY2hhZWwlMjBqb3JkYW58ZW58MHx8MHx8fDA%3D" />

    <ul class="menu">
      <li>
        <a href="#" class="active">
          Inicio
        </a>
      </li>
      <li>
        <a href="#">Remeras</a>
      </li>
      <li>
        <a href="#">Zapatillas</a>
      </li>
    </ul>

    <CartWidget />
  </div>
);
