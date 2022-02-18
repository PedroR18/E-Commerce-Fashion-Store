import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { Product } from '../../utilities/interface';

interface Props {
  products: Product[];
}

const capitalize = (str: string) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};

const StoreSideBar = ({ products }: Props) => {
  const router = useRouter();

  const [categories, setCategories] = useState<Set<String>>(new Set());
  const [brands, setBrands] = useState<Set<String>>(new Set());
  const [colors, setColors] = useState<Set<String>>(new Set());
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(0);
  const [priceRange, setPriceRange] = useState<number[]>([]);

  useEffect(() => {
    if (products) {
      let min = 10000;
      let max = 0;
      products.forEach((product) => {
        setCategories(
          (prev) => new Set([...Array.from(prev), capitalize(product.tag)])
        );
        setBrands((prev) => new Set([...Array.from(prev), product.brand]));
        setColors((prev) => new Set([...Array.from(prev), ...product.colors]));

        if (product.price < min) {
          min = product.price;
        }
        if (product.price > max) {
          max = product.price;
        }
      });
      setMinPrice(min);
      setMaxPrice(max);
    }
  }, [products]);

  return (
    <Flex
      width="300px"
      height="100vh"
      bgColor="grey"
      position="fixed"
      direction="column"
      gap={5}
      alignItems="center"
    >
      <AiOutlineShopping
        size={50}
        onClick={() => router.push('/cart')}
        cursor="pointer"
      />
      <Accordion defaultIndex={[0]} allowToggle allowMultiple w="90%">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {Array.from(categories).map((tag: any) => (
              <Text key={tag} cursor="pointer" _hover={{ color: 'white' }}>
                {tag}
              </Text>
            ))}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Brand
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {Array.from(brands).map((brand: any) => (
              <Text key={brand} cursor="pointer" _hover={{ color: 'white' }}>
                {brand}
              </Text>
            ))}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Color
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {' '}
            {Array.from(colors).map((color: any) => (
              <Text key={color} cursor="pointer" _hover={{ color: 'white' }}>
                {color}
              </Text>
            ))}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Genre
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={4}>Hello</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Price
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <RangeSlider
              min={minPrice}
              max={maxPrice}
              onChangeEnd={(val) => setPriceRange(val)}
            >
              <RangeSliderMark value={minPrice}>$ {minPrice}</RangeSliderMark>
              <RangeSliderMark value={maxPrice}>$ {maxPrice}</RangeSliderMark>
              <RangeSliderMark
                value={priceRange[0]}
                textAlign="center"
                bg="blue.500"
                color="white"
                mt="-10"
                ml="-5"
                w="12"
              >
                $ {priceRange[0]}
              </RangeSliderMark>
              <RangeSliderMark
                value={priceRange[1]}
                textAlign="center"
                bg="blue.500"
                color="white"
                mt="-10"
                ml="-5"
                w="12"
              >
                $ {priceRange[1]}
              </RangeSliderMark>
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
export default StoreSideBar;
