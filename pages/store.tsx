import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductCard from '../components/store/ProductCard';
import StoreSideBar from '../components/store/StoreSideBar';
import { Product } from '../utilities/interface';

const Store: NextPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(Object.values(data)));
  }, []);
  return (
    <>
      <StoreSideBar />
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </>
  );
};
export default Store;
