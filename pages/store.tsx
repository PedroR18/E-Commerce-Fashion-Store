import {
  Box,
  Button,
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
import ProductCard from '../components/store/ProductCard';
import StoreSideBar from '../components/store/StoreSideBar';
import { Product } from '../utilities/interface';

const Store: NextPage = () => {
  const router = useRouter();
  const { collection } = router.query;
  const [products, setProducts] = useState<Product[]>([]);
  const [filterResults, setFilterResults] = useState<Set<Product>>(new Set());
  const [genre, setGenre] = useState('');

  const [categoryFilter, setCategoryFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');
  const [priceRange, setPriceRange] = useState<number[]>([90, 3425]);

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setCategoryFilter('');
      setBrandFilter('');
      setColorFilter('');
      setPriceRange([90, 3425]);
      setFilterResults(new Set());
      setGenre(String(collection));
    }
  }, [router.isReady, collection]);

  useEffect(() => {
    if (router.isReady) {
      if (!genre) {
        fetch('/data/products.json')
          .then((res) => res.json())
          .then((data) => {
            setProducts(Object.values(data));
            setFilterResults(new Set(Object.values(data)));
          });
      }
      if (genre) {
        fetch('/data/products.json')
          .then((res) => res.json())
          .then((data) => {
            Object.values(data).forEach((product: any) => {
              if (product.genre === genre) {
                setProducts((prev) => [...prev, product]);
                setFilterResults(
                  (prev) => new Set([...Array.from(prev), product])
                );
              }
            });
          });
      }
    }
  }, [genre]);

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

    setFilterResults(
      (prev) =>
        new Set([
          ...Array.from(prev).filter(
            (el) => el.price >= priceRange[0] && el.price <= priceRange[1]
          ),
        ])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    setFilterResults(
      (prev) =>
        new Set([
          ...Array.from(prev).filter(
            (el) => el.price >= priceRange[0] && el.price <= priceRange[1]
          ),
        ])
    );
  }, [priceRange]);

  useEffect(() => {
    if (
      !colorFilter &&
      !categoryFilter &&
      !brandFilter &&
      priceRange[0] === 90 &&
      priceRange[1] === 3425
    ) {
      setFilterResults(new Set(products));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorFilter, categoryFilter, brandFilter, priceRange]);

  return (
    <Flex>
      <StoreSideBar
        products={products}
        setCategoryFilter={setCategoryFilter}
        setBrandFilter={setBrandFilter}
        setColorFilter={setColorFilter}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <Box height="100vh" width="300px" />
      <Flex direction="column">
        <Flex
          height="50px"
          width="100%"
          bgColor="grey"
          justifyContent="space-around"
        >
          <Button
            onClick={() =>
              router.push({ pathname: '/store', query: { collection: 'men' } })
            }
          >
            Men
          </Button>
          <Button
            onClick={() =>
              router.push({
                pathname: '/store',
                query: { collection: 'women' },
              })
            }
          >
            Women
          </Button>
        </Flex>
        <Flex height="50px" width="100%" bgColor="grey">
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

            {(priceRange[0] !== 90 || priceRange[1] !== 3425) && (
              <Tag
                size="md"
                borderRadius="full"
                variant="solid"
                colorScheme="green"
                key={`${priceRange[0]}-${priceRange[1]}`}
              >
                <TagLabel>{`$ ${priceRange[0]} - $ ${priceRange[1]}`}</TagLabel>
                <TagCloseButton
                  onClick={() => {
                    setPriceRange([90, 3425]);
                    setUpdate(!update);
                  }}
                />
              </Tag>
            )}
          </HStack>
        </Flex>

        <Grid templateColumns="repeat(5, 400px)" gap={5} m={5}>
          {categoryFilter || brandFilter || colorFilter || priceRange
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
