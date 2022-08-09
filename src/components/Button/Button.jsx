import ButtonStyled from './Button.styled';

const Button = ({ text, onClick }) => (
  <ButtonStyled type="button" onClick={onClick}>
    {text}
  </ButtonStyled>
);

export default Button;
