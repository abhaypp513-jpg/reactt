import { Link, NavLink, useLocation } from "react-router";
import Button from "../Button";

function Header({ theme }) {
  const { pathname } = useLocation();

  return (
    <header>
      <h1>logo</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/"  >Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
        </ul>
      </nav>
      <div className="btn-cont">
        <Button btnText="Login" type="primary" theme={theme} />
        <Button btnText="Register" type="secondary" theme={theme} />
      </div>
    </header>
  );
}

export default Header;