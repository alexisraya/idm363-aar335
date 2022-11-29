import { NavLink } from 'react-router-dom';
import LinkContainer from "react-router-bootstrap/LinkContainer";

import './Header.css';

const Header = () => {
  return (
    <div className= "container">
      <h1 className="title">Round Spice</h1>
      <nav className="navigation">
        <LinkContainer to='/'>
          <NavLink className={"link"}>Home</NavLink>
        </LinkContainer>
        <LinkContainer to='/cart'>
          <NavLink className={"link"}>Cart</NavLink>
        </LinkContainer>
        <LinkContainer to='/admin'>
          <NavLink className={"link"}>Admin</NavLink>
        </LinkContainer>
      </nav>
    </div>
  );
}

export default Header;