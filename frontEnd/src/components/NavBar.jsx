import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ containerStyles }) {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={(isActive) => ({ isActive } ? "active-link" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/clothing"}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        clothing
      </NavLink>
      <NavLink
        to={"/shoes"}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Shoes
      </NavLink>
      <NavLink
        to={"/cosmetics"}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Cosmetics
      </NavLink>
      <NavLink
        to={"/bags"}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Bags
      </NavLink>
    </nav>
  );
}

export default NavBar;
