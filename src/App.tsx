import { Outlet } from 'react-router-dom';
import Modal from 'react-modal';
import StyleContainer from './components/Container';
import Header from './Header';
import { ModalContextProvider } from './context/Modal';
import { useContext } from 'react';
import { UserContext } from './context/User';
import CartModal from './components/CartModal';

function App() {
  Modal.setAppElement('#root');

  const { token } = useContext(UserContext);
  return (
    <div>
      <ModalContextProvider>
        {token && <CartModal />}
        <Header />
        <StyleContainer>
          <Outlet />
        </StyleContainer>
      </ModalContextProvider>
    </div>
  );
}

export default App;
