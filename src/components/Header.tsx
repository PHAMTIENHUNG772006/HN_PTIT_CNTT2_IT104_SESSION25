import {  NavLink, Outlet } from "react-router-dom";


export default function Header() {
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <NavLink to={"./home"} className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
      <NavLink to={"./deatail"}>Deatail</NavLink>
      <NavLink to={"./product"}>Product</NavLink>
      <Outlet></Outlet>
    </div>
  );
}
