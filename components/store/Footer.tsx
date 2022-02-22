import { Flex, Text } from '@chakra-ui/react';
import { AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <Flex
      width="100%"
      height="200px"
      justifyContent="center"
      alignItems="center"
      gap={2}
      direction="column"
    >
      <Flex justifyContent="center" alignItems="center" gap={5}>
        <Text>Pedro Ribeiro</Text>
        <a target="_blank" rel="noreferrer" href="https://github.com/PedroR18">
          <AiOutlineGithub size={30} cursor="pointer" />
        </a>
      </Flex>
      <Text fontSize="xs">2022</Text>
    </Flex>
  );
};
export default Footer;
