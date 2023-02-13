import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { ModalContext } from "../../context/Modal";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { addCartItem } from "../../utils/api";

interface Props {
  id: number;
  image: string;
  title: string;
  price: number;
  score: number;
}

const StyleProductCard = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

interface StyleProductImageProps {
  image: string;
}

const StyleProductImage = styled.div<StyleProductImageProps>`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
  border-radius: 0.5rem;
  background-size: 200px;
`;

const StyleProductTitle = styled.div`
  font-size: 1.5rem;
`;

const StyleProductPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyleProductScore = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

const StyleProductCardButton = styled.button`
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  justify-content: center;
  align-items: center;
  background: none;
  border: 2px solid #282c34;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #282c34;
    color: white;
  }
`;

const ProductCard = (props: Props) => {
  const { token } = useContext(UserContext);
  const { setIsOpen } = useContext(ModalContext);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const addToCartMutation = useMutation(() => addCartItem(token, props.id), {
    onSuccess: () => {
      queryClient.invalidateQueries("cartItems");
    },
  });

  const addToCart = () => {
    if (token) {
      addToCartMutation.mutate();
      setIsOpen(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <StyleProductCard>
      <StyleProductImage image={props.image} />
      <StyleProductTitle>{props.title}</StyleProductTitle>
      <StyleProductPrice>R$ {props.price}</StyleProductPrice>
      <StyleProductScore>
        <AiOutlineStar />
        {props.score}
      </StyleProductScore>
      <StyleProductCardButton onClick={() => addToCart()}>
        Add to cart
      </StyleProductCardButton>
    </StyleProductCard>
  );
};

export default ProductCard;
