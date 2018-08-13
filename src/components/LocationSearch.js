import React from 'react';
import { favoriteStorage } from '../utils/helpers';

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: true,
      value: props.inputValue,
    }
  }

  isValidCityName(name) {
    return !!name & !/\d/.test(name);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.inputValue !== nextProps.inputValue) {
      return true;
    }
    return false;
  }

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
    console.log(this.state.value, 'handlechange state value');
  }

  onSubmitSearch = event => {
    event.preventDefault();

    const city = event.target.elements.city.value.trim();
    console.log(city, 'onsubmit search city');
    if (this.isValidCityName(city)) {
      this.props.handleSubmit(city);
      this.setState({
        isValid: true,
        value: city
      });
    }
    this.setState({ isValid: false });
    event.target.elements.city.value = '';
  }

  addToFavorite = () => {
    const city = this.state.value;
    favoriteStorage(city);
    const cities = JSON.parse(localStorage.getItem('favorite'));
    this.props.handleFavorite(cities);
  }

  render() {
    const { isValid, value } = this.state;
    const { renderButton } = this.props;

    return (
      <form
        className={!isValid ? "search-invalid" : "search-valid"}
        onSubmit={this.onSubmitSearch}
      >
        <input
          required
          name='city'
          placeholder='City'
          type="text"
          className='location-search-input'
          value={value}
          onSubmit={this.handleChange}
        />
        {renderButton()}
        <button
          type='button'
          onClick={this.addToFavorite}
        >Add to favorite</button>
      </form>
    );

  }
}

export default LocationSearch;