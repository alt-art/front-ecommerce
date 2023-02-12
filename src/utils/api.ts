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
