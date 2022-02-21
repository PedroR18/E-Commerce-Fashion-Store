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
import Navbar from '../components/store/Navbar';
import ProductCard from '../components/store/ProductCard';
import StoreSideBar from '../components/store/StoreSideBar';
import { Product } from '../utilities/interface';

const Store: NextPage = () => {
  const router = useRouter();
  const { collection } = router.query;
  const [products, setProducts] = useState<Product[]>([]);
  const [filterResults, setFilterResults] = useState<Set<Product>>(new Set());
  const [genre, setGenre] = useState('');
  const [change, setChange] = useState(false);

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
      setChange(true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (!change) {
      if (
        !colorFilter &&
        !categoryFilter &&
        !brandFilter &&
        priceRange[0] === 90 &&
        priceRange[1] === 3425
      ) {
        setFilterResults(new Set(products));
      }
      setChange(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorFilter, categoryFilter, brandFilter, priceRange]);

  return (
    <Flex
      direction="column"
      width="60%"
      justifyContent="center"
      alignItems="center"
      margin="0 auto"
    >
      <Navbar collection={String(collection)} />
      <Flex width="100%">
        <StoreSideBar
          setCategoryFilter={setCategoryFilter}
          setBrandFilter={setBrandFilter}
          setColorFilter={setColorFilter}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          filterResults={filterResults}
        />
        <Box width="350px" />
        <Flex direction="column" width="70%">
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

              {(priceRange[0] !== 90 || priceRange[1] !== 3425) && (
                <Tag
                  size="lg"
                  borderRadius="full"
                  variant="solid"
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

          <Grid templateColumns="repeat(4, 1fr)" gap={15} m={5}>
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
    </Flex>
  );
};
export default Store;
