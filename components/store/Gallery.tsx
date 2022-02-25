import { Box, Flex, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineZoomIn } from 'react-icons/ai';

interface Props {
  photos: string[];
  onOpen: () => void;
  highlight: number;
  setHighlight: React.Dispatch<React.SetStateAction<number>>;
}

const Gallery = ({ photos, onOpen, highlight, setHighlight }: Props) => {
  const [zoom, setZoom] = useState(false);
  return (
    <Flex gap={12} justifyContent="center" alignItems="center" px={4}>
      <Flex gap={5} direction="column">
        {photos &&
          photos.map((pic, i) => (
            <Image
              src={pic}
              alt={String(i)}
              key={i}
              onClick={() => setHighlight(i)}
              cursor="pointer"
              height="100px"
              objectFit="contain"
            />
          ))}
      </Flex>
      <Box height="700px" position="relative">
        <Box
          position="absolute"
          right={6}
          top={6}
          visibility={zoom ? 'visible' : 'hidden'}
        >
          <AiOutlineZoomIn size={30} fill="rgba(0 ,0 ,0, 0.75 )" />
        </Box>
        <Image
          src={photos[highlight] || photos[0]}
          alt="1"
          height="100%"
          objectFit="contain"
          cursor="pointer"
          onClick={onOpen}
          onMouseOver={() => setZoom(true)}
          onMouseOut={() => setZoom(false)}
        />
      </Box>
    </Flex>
  );
};
export default Gallery;
