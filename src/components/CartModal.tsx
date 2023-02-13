import { useContext, useEffect } from 'react';
import Modal from 'react-modal';
import { useQuery } from 'react-query';
import { ModalContext } from '../context/Modal';
import { UserContext } from '../context/User';
import { getCartItems } from '../utils/api';
import CartItem from './CartItem';
import Loading from 'react-loading';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 6rem);
`;

Modal.setAppElement('#root');

const CartModal = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const { token } = useContext(UserContext);

  const {isLoading, data: cartItems, refetch } = useQuery('cartItems', async () => {
    return getCartItems(token);
  });

  useEffect(() => {
    refetch();
  }, [isOpen]);

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
          width: '500px',
        },
      }}
    >
      <h1>Cart</h1>
      {isLoading ? (
        <Container>
          <Loading type="spin" color="#282c34" height={30} width={30} />
          <p>Gathering your cart items...</p>
        </Container>
      ) : (
        <div>
          {cartItems?.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              />
          ))}
        </div>
      )}
    </Modal>
  );
};

export default CartModal;
