import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';

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
  transition: all 0.3s ease-in-out;
  justify-content: center;
  background: none;
  color: white;
  border: 2px solid white;
  padding: 0.5rem;
  margin: 0 0.5rem;
  font-size: 1.5rem;
  height: 40px;

  &:hover {
    background-color: white;
    color: #282c34;
  }
`;

const StyleContainer = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <StyleHeader>
      <div>
        <h1>Games Store</h1>
        <p>Buy your favorite games</p>
      </div>
      <StyleContainer>
      <StyleHeaderButton><AiOutlineShoppingCart /></StyleHeaderButton>
      <StyleHeaderButton>Log-in</StyleHeaderButton>
      <StyleHeaderButton>Sign-up</StyleHeaderButton>
      </StyleContainer>
    </StyleHeader>
  );
};

export default Header;
