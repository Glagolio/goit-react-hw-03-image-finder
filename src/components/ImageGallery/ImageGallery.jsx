import ImageGalleryStyled from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGallertItem';

const ImageGallery = ({ galleryList }) => (
  <ImageGalleryStyled>
    <ImageGalleryItem galleryList={galleryList} />
  </ImageGalleryStyled>
);

export default ImageGallery;
