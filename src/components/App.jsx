import AppStyled from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Component } from 'react';
import Modal from './Modal/Modal';

const KEY = '29141381-76438ddf2d97e3e41caa7b64b';

export class App extends Component {
  state = {
    gallery: [],
    page: 1,
    query: '',
    total: null,
    loading: false,
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.gallery !== this.state.gallery) {
      this.setState({ loading: false });
    }
  }

  apiFetch = query =>
    fetch(
      `https://pixabay.com/api/?q=${query}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    ).then(responce => responce.json());

  handleSubmit = query => {
    if (query.trim().length === 0) {
      return;
    }

    this.setState({ query, loading: true });

    this.apiFetch(query).then(data =>
      this.setState({
        gallery: [...data.hits],
        total: data.totalHits,
      })
    );
  };

  handleLoadMoreBtn = async () => {
    await this.setState(prevState => {
      return { page: prevState.page + 1, loading: true };
    });
    this.apiFetch(this.state.query).then(data =>
      this.setState(prevState => {
        return { gallery: [...prevState.gallery, ...data.hits] };
      })
    );
  };

  render() {
    return (
      <AppStyled>
        <Searchbar>
          <SearchForm onSubmit={this.handleSubmit} />
        </Searchbar>
        {this.state.gallery.length > 0 && (
          <>
            <ImageGallery
              galleryList={this.state.gallery}
              onClick={this.openModalGallery}
            />
            {this.state.total !== this.state.gallery.length && (
              <Button text="Load more" onClick={this.handleLoadMoreBtn} />
            )}
          </>
        )}
        {this.state.loading && <Loader />}
      </AppStyled>
    );
  }
}
