import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavBarElements';

const Navbar = () => {
    return (
      <>
        <Nav>
          <NavMenu>
            <NavLink to='/' activeStyle>
              Ilerna Online
            </NavLink>
            <NavLink to='/' activeStyle>
              Home
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
              Sign Up
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };

  export default Navbar;
