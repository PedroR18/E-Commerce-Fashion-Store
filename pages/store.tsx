import {
  Box,
  Flex,
  Grid,
  HStack,
  Tag,
  TagCloseButton,
  TagLabel,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../components/store/Footer';
import Navbar from '../components/store/Navbar';
import ProductCard from '../components/store/ProductCard';
import StoreSideBar from '../components/store/StoreSideBar';
import { Product } from '../utilities/interface';

const Store: NextPage = () => {
  const router = useRouter();
  const { collection } = router.query;
  const [products, setProducts] = useState<Product[]>([]);
  const [fetchedData, setFetchedData] = useState<Product[]>([]);
  const [genre, setGenre] = useState('');
  const [change, setChange] = useState(false);

  const [categoryFilter, setCategoryFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setCategoryFilter('');
      setBrandFilter('');
      setColorFilter('');
      setChange(true);
      setProducts([]);
      setGenre(String(collection));
    }
  }, [router.isReady, collection]);

  useEffect(() => {
    if (router.isReady) {
      fetch('/data/products.json')
        .then((res) => res.json())
        .then((data) => {
          if (genre === 'men' || genre === 'women') {
            const arr = Array.from(
              (Object.values(data) as Product[])
                .reduce((map, obj) => map.set(obj.id, obj), new Map())
                .values()
            ).filter((product) => product.genre === genre);
            setFetchedData(arr);
            setProducts(arr);
          } else {
            const arr = Array.from(
              (Object.values(data) as Product[])
                .reduce((map, obj) => map.set(obj.id, obj), new Map())
                .values()
            );
            setFetchedData(arr);
            setProducts(arr);
          }
        });

      //
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre, router.isReady]);

  useEffect(() => {
    setProducts(fetchedData);
    if (categoryFilter) {
      setProducts((prev) => [
        ...Array.from(prev).filter(
          (el) => el.tag === categoryFilter.toLowerCase()
        ),
      ]);
    }

    if (brandFilter) {
      setProducts((prev) => [
        ...Array.from(prev).filter((el) => el.brand === brandFilter),
      ]);
    }

    if (colorFilter) {
      setProducts((prev) => [
        ...Array.from(prev).filter((el) => el.colors.includes(colorFilter)),
      ]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  useEffect(() => {
    if (categoryFilter) {
      setProducts((prev) => [
        ...Array.from(prev).filter(
          (el) => el.tag === categoryFilter.toLowerCase()
        ),
      ]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilter]);

  useEffect(() => {
    if (brandFilter) {
      setProducts((prev) => [
        ...Array.from(prev).filter((el) => el.brand === brandFilter),
      ]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandFilter]);

  useEffect(() => {
    if (colorFilter) {
      setProducts((prev) => [
        ...Array.from(prev).filter((el) => el.colors.includes(colorFilter)),
      ]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorFilter]);

  useEffect(() => {
    if (!change) {
      if (!colorFilter && !categoryFilter && !brandFilter) {
        setProducts(fetchedData);
      }
      setChange(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorFilter, categoryFilter, brandFilter]);

  return (
    <Flex
      direction="column"
      width="60%"
      justifyContent="center"
      alignItems="center"
      margin="0 auto"
    >
      <Navbar collection={String(collection)} />
      <Flex width="100%" gap={12}>
        <StoreSideBar
          setCategoryFilter={setCategoryFilter}
          setBrandFilter={setBrandFilter}
          setColorFilter={setColorFilter}
          products={products}
        />
        <Box width="300px" />
        <Flex direction="column" width="100%">
          <Flex height="50px" width="100%" paddingLeft="10">
            <HStack spacing={4}>
              {categoryFilter && (
                <Tag
                  size="lg"
                  borderRadius="full"
                  variant="solid"
                  key={categoryFilter}
                >
                  <TagLabel>{categoryFilter}</TagLabel>
                  <TagCloseButton
                    onClick={() => {
                      setCategoryFilter('');
                      setUpdate(!update);
                    }}
                  />
                </Tag>
              )}
              {brandFilter && (
                <Tag
                  size="lg"
                  borderRadius="full"
                  variant="solid"
                  key={brandFilter}
                >
                  <TagLabel>{brandFilter}</TagLabel>
                  <TagCloseButton
                    onClick={() => {
                      setBrandFilter('');
                      setUpdate(!update);
                    }}
                  />
                </Tag>
              )}
              {colorFilter && (
                <Tag
                  size="lg"
                  borderRadius="full"
                  variant="solid"
                  key={colorFilter}
                >
                  <TagLabel>{colorFilter}</TagLabel>
                  <TagCloseButton
                    onClick={() => {
                      setColorFilter('');
                      setUpdate(!update);
                    }}
                  />
                </Tag>
              )}
            </HStack>
          </Flex>

          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={10}
            m={5}
            mr={0}
            minH="500px"
          >
            {categoryFilter || brandFilter || colorFilter
              ? products.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })
              : products.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
          </Grid>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};
export default Store;
