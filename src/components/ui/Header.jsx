import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <NavLink style={{ marginRight: "2rem" }} to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </>
  );
};

export default Header;
