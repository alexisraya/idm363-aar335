import { NavLink, Link} from 'react-router-dom';
import LinkContainer from "react-router-bootstrap/LinkContainer";

import './Header.css';

const Header = () => {
  return (
    <div className= "container">
      <Link className="title" to="/">Round Spice</Link>
      <nav className="navigation">
        <LinkContainer to='/admin'>
          <NavLink className={"link"}>Admin</NavLink>
        </LinkContainer>
        <LinkContainer to='/cart'>
          <NavLink className={"link"}>Cart</NavLink>
        </LinkContainer>
      </nav>
    </div>
  );
}

export default Header;