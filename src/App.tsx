import { Outlet } from 'react-router-dom';
import Modal from 'react-modal';
import StyleContainer from './components/Container';
import Header from './Header';
import { ModalContextProvider } from './context/Modal';

function App() {
  Modal.setAppElement('#root');
  return (
    <div>
      <ModalContextProvider>
        <Header />
        <StyleContainer>
          <Outlet />
        </StyleContainer>
      </ModalContextProvider>
    </div>
  );
}

export default App;
