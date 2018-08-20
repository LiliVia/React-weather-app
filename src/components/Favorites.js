import React from 'react';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: JSON.parse(localStorage.getItem('favorite')) || []
    }
  }

  render() {

    let cities = this.state.cities;
    console.log('favorite state: ', this.state)

    return (
      <div className="favorites">
        <p>Favorite: </p>
        {cities.map(city =>
          <p key={city}>{city}</p>
        )}
      </div>
    )
  }
}

export default Favorites;