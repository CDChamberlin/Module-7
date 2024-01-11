import React, { useContext } from "react";
import { MyThemeContext } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function NavBar() {
  const { theme } = useContext(MyThemeContext);
  const { currentUser } = useUserContext();

  console.log(currentUser);

  return (
    <div
      className="NavBar"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      {/* <span className="navLeft">
        <img src={reactLogo} className="logo" alt="Vite logo" />
      </span> */}
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dash">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">LoginForm</NavLink>
        </li>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
      </ul>
      {/* <span className="navRight">
        <img src="https://placehold.co/60" />
        {currentUser?.email || "Guest"}
      </span> */}
    </div>
  );
}