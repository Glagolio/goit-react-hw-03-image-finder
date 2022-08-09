import SearchFormStyled from './SearchForm.styled';
import SearchFormInput from './SearchFormInput/SearchFormInput';
import SearchFormButton from './SearchFormButton/SearchFormButton';
import PropTypes from 'prop-types';
import { Component } from 'react';

class SearchForm extends Component {
  state = {
    searchText: '',
  };

  handleChange = e => {
    this.setState({ searchText: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchText);
  };

  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <SearchFormButton />
        <SearchFormInput
          onChange={this.handleChange}
          value={this.state.searchText}
        />
      </SearchFormStyled>
    );
  }
}

export default SearchForm;

SearchForm.propType = {
  searchText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
