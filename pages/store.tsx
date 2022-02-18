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
import { useEffect, useState } from 'react';
import ProductCard from '../components/store/ProductCard';
import StoreSideBar from '../components/store/StoreSideBar';
import { Product } from '../utilities/interface';

const Store: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterResults, setFilterResults] = useState<Set<Product>>(new Set());

  const [categoryFilter, setCategoryFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(Object.values(data));
        setFilterResults(new Set(Object.values(data)));
      });
  }, []);

  useEffect(() => {
    setFilterResults(new Set(products));
    if (categoryFilter) {
      setFilterResults(
        (prev) =>
          new Set([
            ...Array.from(prev).filter(
              (el) => el.tag === categoryFilter.toLowerCase()
            ),
          ])
      );
    }

    if (brandFilter) {
      setFilterResults(
        (prev) =>
          new Set([
            ...Array.from(prev).filter((el) => el.brand === brandFilter),
          ])
      );
    }

    if (colorFilter) {
      setFilterResults(
        (prev) =>
          new Set([
            ...Array.from(prev).filter((el) => el.colors.includes(colorFilter)),
          ])
      );
    }
  }, [update]);

  useEffect(() => {
    if (categoryFilter) {
      setFilterResults(
        (prev) =>
          new Set([
            ...Array.from(prev).filter(
              (el) => el.tag === categoryFilter.toLowerCase()
            ),
          ])
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilter]);

  useEffect(() => {
    if (brandFilter) {
      setFilterResults(
        (prev) =>
          new Set([
            ...Array.from(prev).filter((el) => el.brand === brandFilter),
          ])
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandFilter]);

  useEffect(() => {
    if (colorFilter) {
      setFilterResults(
        (prev) =>
          new Set([
            ...Array.from(prev).filter((el) => el.colors.includes(colorFilter)),
          ])
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorFilter]);

  useEffect(() => {
    if (!colorFilter && !categoryFilter && !brandFilter) {
      setFilterResults(new Set(products));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorFilter, categoryFilter, brandFilter]);

  return (
    <Flex>
      <StoreSideBar
        products={products}
        setCategoryFilter={setCategoryFilter}
        setBrandFilter={setBrandFilter}
        setColorFilter={setColorFilter}
      />
      <Box height="100vh" width="300px" />
      <Flex direction="column">
        <Flex height="100px" width="100%" bgColor="grey">
          <HStack spacing={4}>
            {categoryFilter && (
              <Tag
                size="md"
                borderRadius="full"
                variant="solid"
                colorScheme="green"
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
                size="md"
                borderRadius="full"
                variant="solid"
                colorScheme="green"
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
                size="md"
                borderRadius="full"
                variant="solid"
                colorScheme="green"
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
        <Grid templateColumns="repeat(5, 400px)" gap={5} m={5}>
          {categoryFilter || brandFilter || colorFilter
            ? Array.from(filterResults).map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })
            : products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
        </Grid>
      </Flex>
    </Flex>
  );
};
export default Store;
