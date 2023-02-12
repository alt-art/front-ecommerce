import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getProducts } from '../../utils/api';
import ProductCard from './Card';

const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

const StyleTitle = styled.h1`
  font-size: 2rem;
  color: #282c34;
  margin: 1rem 0;
`;

function Products() {
  const {data: products} = useQuery('products', getProducts);
  return (
    <div>
      <StyleTitle>Products</StyleTitle>
      <StyleGrid>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            image={`${import.meta.env.VITE_ECOMMERCE_API}/assets/${product.imageURL}`}
            score={product.score}
          />
        ))}
      </StyleGrid>
    </div>
  );
}

export default Products;
