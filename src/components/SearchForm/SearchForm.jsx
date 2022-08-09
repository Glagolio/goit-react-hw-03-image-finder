import SearchFormStyled from './SearchForm.styled';
import SearchFormInput from './SearchFormInput/SearchFormInput';
import SearchFormButton from './SearchFormButton/SearchFormButton';

const SearchForm = ({ childen }) => (
  <SearchFormStyled>
    <SearchFormButton />

    <SearchFormInput />
  </SearchFormStyled>
);

export default SearchForm;
