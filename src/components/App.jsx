import AppStyled from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGallertItem';

export const App = () => {
  return (
    <AppStyled>
      <Searchbar>
        <SearchForm />
      </Searchbar>
      <ImageGallery>
        <ImageGalleryItem />
      </ImageGallery>
    </AppStyled>
  );
};
