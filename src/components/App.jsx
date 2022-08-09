import AppStyled from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGallertItem';
import { Component } from 'react';

const KEY = '29141381-76438ddf2d97e3e41caa7b64b';

export class App extends Component {
  state = {
    gallery: [],
    page: 1,
  };

  handleSubmit = async text => {
    const responce = fetch(
      `https://pixabay.com/api/?q=${text}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(responce => responce.json())
      .then(data => this.setState({ gallery: [...data.hits] }));
  };
  render() {
    return (
      <AppStyled>
        <Searchbar>
          <SearchForm onSubmit={this.handleSubmit} />
        </Searchbar>
        {this.state.gallery.length > 0 && (
          <ImageGallery galleryList={this.state.gallery} />
        )}
      </AppStyled>
    );
  }
}
