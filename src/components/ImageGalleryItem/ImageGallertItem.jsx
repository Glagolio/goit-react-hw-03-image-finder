import ImageGalleryItemStyled from './ImageGalleryItem.styled';
import ImageGalleryItemImage from './ImageGalleryItemImage/ImageGalleryItemImage';
import Modal from 'components/Modal/Modal';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    largeImage: null,
  };

  showModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openGalleryItemModal = id => {
    this.showModal();
    const galleryItem = this.props.galleryList.filter(item => item.id === id);
    this.setState({ largeImage: galleryItem[0].largeImageURL });
  };

  render() {
    return (
      <>
        {this.props.galleryList.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItemStyled
              key={id}
              onClick={() => {
                this.openGalleryItemModal(id);
              }}
            >
              <ImageGalleryItemImage src={webformatURL} />
            </ImageGalleryItemStyled>
          );
        })}
        {this.state.showModal && (
          <Modal src={this.state.largeImage} onClose={this.showModal} />
        )}
      </>
    );
  }
}
export default ImageGalleryItem;
