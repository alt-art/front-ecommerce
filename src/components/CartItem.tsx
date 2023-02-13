import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { UserContext } from "../context/User";
import { removeCartItem } from "../utils/api";

interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  imageURL: string;
}

interface Props {
  product: Product;
  quantity: number;
}

const StyleCartItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
`;

const StyleCartItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

const StyleCartItemImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const StyleCartItemName = styled.div`
  font-size: 1.5rem;
`;

const StyleCartItemPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyleCartItemQuantity = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyleCartItemButton = styled.button`
  display: flex;
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

const CartItem = ({ product, quantity }: Props) => {
  const { token } = useContext(UserContext);
  const queryClient = useQueryClient();

  const removeItemMutation = useMutation(
    () => removeCartItem(token, product.id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cartItems");
      },
    }
  );

  return (
    <StyleCartItem>
      <StyleCartItemInfo>
        <StyleCartItemImg
          src={`${import.meta.env.VITE_ECOMMERCE_API}/assets/${
            product.imageURL
          }`}
        />
        <div>
          <StyleCartItemName>{product.name}</StyleCartItemName>
          <StyleCartItemPrice>R$ {product.price}</StyleCartItemPrice>
        </div>
      </StyleCartItemInfo>
      <StyleCartItemQuantity>{quantity}</StyleCartItemQuantity>
      <StyleCartItemButton onClick={() => removeItemMutation.mutate()}>
        Remove
      </StyleCartItemButton>
    </StyleCartItem>
  );
};

export default CartItem;
