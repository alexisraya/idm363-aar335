import { NavLink, Link} from 'react-router-dom';
import LinkContainer from "react-router-bootstrap/LinkContainer";

import './Header.css';

const Header = () => {
  return (
    <div className= "container">
      <LinkContainer to='/'>
          <Link className={"title"}>Round Spice</Link>
        </LinkContainer>
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