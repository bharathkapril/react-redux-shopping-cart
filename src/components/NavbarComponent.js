import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/product">product</Link>
      <Link to="/cart">cart</Link>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavbarComponent;
