import { Flex, Grid, Image } from '@chakra-ui/react';

interface Props {
  photos: string[];
  onOpen: () => void;
  highlight: number;
  setHighlight: React.Dispatch<React.SetStateAction<number>>;
}

const Gallery = ({ photos, onOpen, highlight, setHighlight }: Props) => {
  return (
    <Flex direction="column" gap={5}>
      <Image
        src={photos[highlight] || photos[0]}
        alt="1"
        height="900px"
        objectFit="contain"
        cursor="pointer"
        onClick={onOpen}
      />
      <Grid templateColumns="repeat(5, 1fr)" width="800px" gap={5}>
        {photos &&
          photos.map((pic, i) => (
            <Image
              src={pic}
              alt={String(i)}
              key={i}
              onClick={() => setHighlight(i)}
              cursor="pointer"
            />
          ))}
      </Grid>
    </Flex>
  );
};
export default Gallery;
