import { Button } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ProductPage: NextPage = () => {
  const router = useRouter();

  const { productId } = router.query;
  return (
    <>
      <p>{productId}</p>
      <Button onClick={() => router.push('/store')}>Go Back</Button>
    </>
  );
};
export default ProductPage;
