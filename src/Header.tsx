import styled from 'styled-components';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './context/User';
import { ModalContext } from './context/Modal';

const StyleHeader = styled.header`
  background-color: #282c34;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyleHeaderButton = styled.button`
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  justify-content: center;
  background: none;
  border: 2px solid white;
  padding: 0.5rem;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  height: 40px;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: white;
    color: #282c34;
  }
`;

const StyleContainer = styled.div`
  display: flex;
`;

const Header = () => {
  const { token } = useContext(UserContext);
  const { setIsOpen } = useContext(ModalContext);

  const navigate = useNavigate();

  return (
    <StyleHeader>
      <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1>Games Store</h1>
        <p>Buy your favorite games</p>
      </NavLink>
      <StyleContainer>
        {!token ? (
          <>
            <StyleHeaderButton onClick={() => navigate('/login')}>
              Log-in
            </StyleHeaderButton>
            <StyleHeaderButton onClick={() => navigate('/signup')}>
              Sign-up
            </StyleHeaderButton>
          </>
        ) : (
          <>
            <StyleHeaderButton onClick={() => setIsOpen(true)}>
              <AiOutlineShoppingCart />
            </StyleHeaderButton>
            <StyleHeaderButton onClick={() => navigate('/profile')}>
              <AiOutlineUser />
            </StyleHeaderButton>
          </>
        )}
      </StyleContainer>
    </StyleHeader>
  );
};

export default Header;
