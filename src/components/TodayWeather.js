import React, { Fragment } from 'react';

const TodayWeather = ({ today }) => {

  const { timezone } = today;

  return (
    <Fragment>
      <div className="today-weather">
        {timezone}
      </div>
    </Fragment>
  );
};

export default TodayWeather;
