import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Store: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <p>{router.query.for}</p>
    </>
  );
};
export default Store;
