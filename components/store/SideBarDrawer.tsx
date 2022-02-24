import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Product } from '../../utilities/interface';
import StoreSideBar from './StoreSideBar';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  collection?: string;
  setCategoryFilter?: React.Dispatch<React.SetStateAction<string>>;
  setBrandFilter?: React.Dispatch<React.SetStateAction<string>>;
  setColorFilter?: React.Dispatch<React.SetStateAction<string>>;
  products?: Product[];
  minimal: boolean;
}

const SideBarDrawer = ({
  isOpen,
  onClose,
  collection,
  products,
  setCategoryFilter,
  setBrandFilter,
  setColorFilter,
  minimal,
}: Props) => {
  const router = useRouter();
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <Flex gap={10}>
            <Text
              cursor="pointer"
              fontSize="xl"
              fontWeight={
                collection
                  ? collection === 'men'
                    ? 'bold'
                    : 'normal'
                  : 'normal'
              }
              onClick={() =>
                router.push({
                  pathname: '/store',
                  query: { collection: 'men' },
                })
              }
            >
              Men
            </Text>
            <Text
              cursor="pointer"
              fontSize="xl"
              fontWeight={
                collection
                  ? collection === 'women'
                    ? 'bold'
                    : 'normal'
                  : 'normal'
              }
              onClick={() =>
                router.push({
                  pathname: '/store',
                  query: { collection: 'women' },
                })
              }
            >
              Women
            </Text>
          </Flex>
          {minimal || (
            <Box marginTop={10} position="absolute" left={2}>
              <StoreSideBar
                products={products!}
                setCategoryFilter={setCategoryFilter!}
                setBrandFilter={setBrandFilter!}
                setColorFilter={setColorFilter!}
              />
            </Box>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default SideBarDrawer;
