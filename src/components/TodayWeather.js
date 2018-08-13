import React, { Fragment } from 'react';

const TodayWeather = ({ today }) => {

  const { timezone } = today;

  console.log('today "today" ', today);
  console.log('today', today.city_name);

  return (
    <Fragment>
      <div className="today-weather">
        {timezone}
      </div>
    </Fragment>
  );
};


export default TodayWeather;
