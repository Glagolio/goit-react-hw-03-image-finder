import ImageGalleryItemImageStyled from './ImageGalleryItemImage.styled';

const ImageGalleryItemImage = ({ image, alt }) => (
  <ImageGalleryItemImageStyled src={image} alt={alt} />
);

export default ImageGalleryItemImage;
