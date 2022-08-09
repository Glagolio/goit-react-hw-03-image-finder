import LoaderStyled from './Loader.styled';
import { FallingLines } from 'react-loader-spinner';

const Loader = () => (
  <LoaderStyled>
    <FallingLines
      color="3f51b5"
      width="100"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  </LoaderStyled>
);

export default Loader;
