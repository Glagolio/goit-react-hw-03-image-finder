import OverlayStyled from './Overlay/Overlay.styled';
import ModalStyled from './Modal.styled';

const Modal = ({ src }) => (
  <OverlayStyled>
    <ModalStyled>
      <img src={src} alt="" />
    </ModalStyled>
  </OverlayStyled>
);

export default Modal;
