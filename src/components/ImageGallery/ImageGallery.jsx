import ImageGalleryStyled from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGallertItem';
import Button from 'components/Button/Button';

const ImageGallery = ({ galleryList, onClickLoadMoreBtn }) => (
  <>
    <ImageGalleryStyled>
      <ImageGalleryItem galleryList={galleryList} />
    </ImageGalleryStyled>
  </>
);

export default ImageGallery;
