import styled from 'styled-components';
import logo from '../img/logo2.png';
import { NavLink } from 'react-router-dom';

const NavigationStyled = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-items {
    display: flex;
    align-items: center;
    li {
      margin: 0 1rem;
    }
    .primary-btn {
      margin-left: 3rem;
      background-color: rgba(57, 95, 246, 0.6);
      padding: 0.6rem 0.8rem;
      border-radius: 70px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      &:hover {
        background-color: rgba(57, 95, 246, 1);
      }
    }
    .logo {
      img {
        width: 60px;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavigationStyled>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <ul className='nav-items'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/'>About</NavLink>
        </li>
        <li>
          <NavLink to='/'>FAQs</NavLink>
        </li>
        <li>
          <NavLink to='/'>Activity</NavLink>
        </li>
        <li>
          <NavLink to='/'>Contact</NavLink>
        </li>
        <div className='primary-btn'>GET CONNECTED</div>
      </ul>
    </NavigationStyled>
  );
};
export default Navbar;
