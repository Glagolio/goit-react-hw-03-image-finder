import SearchFormButtonStyled from './SearchFormButtonStyled';
import { BiSearchAlt2 } from 'react-icons/bi';

const SearchFormButton = () => (
  <SearchFormButtonStyled type="submit">
    <BiSearchAlt2 size="36" />
  </SearchFormButtonStyled>
);

export default SearchFormButton;
