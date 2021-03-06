import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useMediaQuery,
} from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  photos: string[];
  highlight: number;
}

const ProductModal = ({ isOpen, onClose, photos, highlight }: Props) => {
  const [isLargerThan80em] = useMediaQuery('(min-width: 80em)');
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      size={isLargerThan80em ? '6xl' : 'full'}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            initialSlide={highlight || 0}
          >
            {photos &&
              photos.map((pic, i) => (
                <SwiperSlide key={i}>
                  <Image
                    alt={String(i)}
                    src={pic}
                    h="800px"
                    objectFit="contain"
                    margin="0 auto"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default ProductModal;
