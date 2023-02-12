import { useContext } from 'react';
import Modal from 'react-modal';
import { ModalContext } from '../context/Modal';

Modal.setAppElement('#root');

const CartModal = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Cart"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.781)',
        },
        content: {
          backgroundColor: '#fff',
          padding: '2rem',
          left: '0',
          top: '0',
          height: '100%',
          width: '300px',
        },
      }}
    >
      <h1>Cart</h1>
    </Modal>
  );
};

export default CartModal;
