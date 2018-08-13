import React, { Fragment } from 'react';
import DayWeekForecast from './DayWeekForecast';

const WeekForecast = ({ forecast }) => {
  forecast = forecast.splice(0, 7);
  return (
    <Fragment>
      <div className="week-forecast">{forecast.map(DayWeekForecast)}</div>
    </Fragment>
  );

};

export default WeekForecast;