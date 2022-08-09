import ImageGalleryItemStyled from './ImageGalleryItem.styled';
import ImageGalleryItemImage from './ImageGalleryItemImage/ImageGalleryItemImage';

const ImageGalleryItem = ({ galleryList }) => (
  <>
    {galleryList.map(({ id, webformatURL, largeImageURL }) => {
      return (
        <ImageGalleryItemStyled key={id}>
          <ImageGalleryItemImage src={webformatURL} />
        </ImageGalleryItemStyled>
      );
    })}
  </>
);
export default ImageGalleryItem;
