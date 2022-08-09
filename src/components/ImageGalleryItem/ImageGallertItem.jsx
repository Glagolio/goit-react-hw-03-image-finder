import ImageGalleryItemStyled from './ImageGalleryItem.styled';
import ImageGalleryItemImage from './ImageGalleryItemImage/ImageGalleryItemImage';

const ImageGalleryItem = ({ image, alt }) => (
  <ImageGalleryItemStyled>
    <ImageGalleryItemImage src={image} alt={alt} />
  </ImageGalleryItemStyled>
);

export default ImageGalleryItem;
