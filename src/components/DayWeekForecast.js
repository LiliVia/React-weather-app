import React from 'react';
import { srcIcon, getWeekday } from '../utils/helpers';

const DayWeekForecast = (props) => {
  // console.log('dayforecast props', props);
  const { datetime, weather, max_temp, min_temp } = props;
  const date = datetime.split('-').reverse().join('.');

  return (
    <div key={date} className="day-forecast">
      <h3>{getWeekday(datetime)}</h3>
      <p>{date}</p>
      <p>{weather.description}</p>
      <p>max. {max_temp.toFixed(0)}&deg;C</p>
      <p>min. {min_temp.toFixed(0)}&deg;C</p>
      <p><img src={srcIcon(weather.icon)} alt="weather icon" /></p>
    </div>
  );
};

export default DayWeekForecast;
