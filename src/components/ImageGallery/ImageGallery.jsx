import ImageGalleryStyled from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGallertItem';

const ImageGallery = ({ galleryList, onClickLoadMoreBtn }) => (
  <>
    <ImageGalleryStyled>
      <ImageGalleryItem galleryList={galleryList} />
    </ImageGalleryStyled>
  </>
);

export default ImageGallery;
