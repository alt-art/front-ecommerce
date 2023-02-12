import axios from 'axios';

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
  return (await api.get<Product[]>('/product/')).data;
}

interface Login {
  token: string;
}

export async function login(username: string, password: string): Promise<Login> {
  return (await api.post<Login>('/api-token-auth/', { username, password })).data;
}

export async function signUp(username: string, password: string, email: string): Promise<Login> {
  return (await api.post<Login>('/user/', { username, password, email})).data;
}