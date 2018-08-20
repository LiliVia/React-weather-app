import React, { Component } from 'react';
import LocationSearch from './components/LocationSearch';
import WeekForecast from './components/WeekForecast';
import TodayWeather from './components/TodayWeather';
import Favorites from './components/Favorites';
import { getForecast } from './utils/api';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      hasError: false,
      favorites: props.cities || [],
      todayWeather: [],
      weekForecast: [],
    }
  }

  componentDidMount() {
    this.getCityForecast(this.state.inputVal).then(state => {
      this.setState(state);
    });
  }

  componentWillReceiveProps({ city }) {
    if (!!city) {
      this.getCityForecast(city).then(state => {
        this.setState(state);
      });
    }
  }

  prepareNextState([today, week]) {
    return {
      todayWeather: today.data[0],
      weekForecast: week.data,
    }
  }

  handleSearchSubmit = (city) => {
    this.getCityForecast(city).then(state => {
      this.setState(state);
    });
  }

  renderFavorites = (cities) => {
    this.setState({
      favorites: cities
    })
  }

  getCityForecast(city) {
    return getForecast(city)
      .then((data) => {
        const nextState = this.prepareNextState(data);
        this.setState(nextState);
      })
      .catch(console.error);
  }

  render() {
    const { weekForecast, todayWeather, favorites, inputVal } = this.state;

    return (
      <div className="weather-app">
        <header className="weather-header">
          <h1 className="weather-title">New rocket forecast app</h1>
        </header>
        <LocationSearch
          value={inputVal}
          handleSubmit={this.handleSearchSubmit}
          handleFavorite={this.renderFavorites}
          renderButton={() => (
            <button className="location-search-submit">Find</button>
          )}
        />
        <Favorites cities={favorites} />
        <TodayWeather today={todayWeather} />
        <WeekForecast forecast={weekForecast} />
      </div>
    );
  }
}

export default App;
