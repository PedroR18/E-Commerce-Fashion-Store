import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Product } from '../../utilities/interface';

interface Props {
  setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
  setBrandFilter: React.Dispatch<React.SetStateAction<string>>;
  setColorFilter: React.Dispatch<React.SetStateAction<string>>;
  products: Product[];
}

const capitalize = (str: string) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};

const StoreSideBar = ({
  setCategoryFilter,
  setBrandFilter,
  setColorFilter,

  products,
}: Props) => {
  const [categories, setCategories] = useState<Set<String>>(new Set());
  const [brands, setBrands] = useState<Set<String>>(new Set());
  const [colors, setColors] = useState<Set<String>>(new Set());

  useEffect(() => {
    setCategories(new Set());
    setBrands(new Set());
    setColors(new Set());
    products.forEach((product) => {
      setCategories(
        (prev) => new Set([...Array.from(prev), capitalize(product.tag)])
      );
      setBrands((prev) => new Set([...Array.from(prev), product.brand]));
      setColors((prev) => new Set([...Array.from(prev), ...product.colors]));
    });
  }, [products]);

  return (
    <Flex
      width="300px"
      position="fixed"
      direction="column"
      gap={5}
      alignItems="center"
    >
      <Accordion defaultIndex={[0]} allowToggle allowMultiple w="100%">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="xl">
                Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {Array.from(categories).map((tag: any) => (
              <Text
                key={tag}
                cursor="pointer"
                transition=".2s ease-in"
                _hover={{
                  color: 'grey',
                  transform: 'scale(1.05)',
                }}
                onClick={() => {
                  setCategoryFilter(tag);
                }}
              >
                {tag}
              </Text>
            ))}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="xl">
                Brand
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {Array.from(brands).map((brand: any) => (
              <Text
                key={brand}
                cursor="pointer"
                transition=".2s ease-in"
                _hover={{ color: 'grey', transform: 'scale(1.05)' }}
                onClick={() => {
                  setBrandFilter(brand);
                }}
              >
                {brand}
              </Text>
            ))}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="xl">
                Color
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex direction="column" gap={3}>
              {Array.from(colors).map((color: any) => (
                <Flex
                  key={color}
                  gap={3}
                  cursor="pointer"
                  transition=".2s ease-in"
                  _hover={{ color: 'grey', transform: 'scale(1.05)' }}
                >
                  <Box
                    w={5}
                    h={5}
                    bgColor={color.toLowerCase()}
                    borderRadius="full"
                    border="1px solid grey"
                  />
                  <Text
                    onClick={() => {
                      setColorFilter(color);
                    }}
                  >
                    {color}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};
export default StoreSideBar;
