import { Button, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { AiOutlineShopping } from 'react-icons/ai';
import Logo from './Logo';

const MotionFlex = motion(Flex);

const NavBar = () => {
  return (
    <Flex
      height={100}
      bgColor="grey"
      width="100vw"
      justifyContent="space-between"
      alignItems="center"
      paddingX={20}
      position="sticky"
      top="0"
    >
      <Logo />
      <MotionFlex gap={10}>
        <Button>Store</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </MotionFlex>
      <AiOutlineShopping size={50} />
    </Flex>
  );
};
export default NavBar;
