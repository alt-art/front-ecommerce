import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_ECOMMERCE_API,
});

interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  imageURL: string;
}

export async function getProducts(): Promise<Product[]> {
  return (await api.get<Product[]>("/product/")).data;
}

interface Login {
  token: string;
}

export async function login(
  username: string,
  password: string
): Promise<Login> {
  return (await api.post<Login>("/api-token-auth/", { username, password }))
    .data;
}

export async function signUp(
  username: string,
  password: string,
  email: string
): Promise<Login> {
  return (await api.post<Login>("/user/", { username, password, email })).data;
}

interface CartItem {
  id: number;
  user: number;
  product: Product;
  quantity: number;
}

export async function getCartItems(token: string): Promise<CartItem[]> {
  return (
    await api.get<CartItem[]>("/cart/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
  ).data;
}

export async function addCartItem(
  token: string,
  productId: number
): Promise<CartItem> {
  return (
    await api.post<CartItem>(
      "/cart/",
      {
        product: productId,
        quantity: 1,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    )
  ).data;
}

export async function removeCartItem(
  token: string,
  product: number
): Promise<void> {
  await api.delete<void>(`/cart/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {
      product,
    },
  });
}
