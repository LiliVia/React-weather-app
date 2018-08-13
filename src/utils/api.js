const API_URL = 'https://api.weatherbit.io/v2.0';
const API_KEY = '02fd99f29107456e914006fff00a5b9c';


const getRequest = url => {
  return fetch(`${API_URL}/${url}&unit=M&key=${API_KEY}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error();
      } else {
        // console.log(resp.json);
        return resp.json();
      }
    });
};

// const buildUrl = (method, params) => {
//   const getParams = Object.entries(params)
//     .map(([key, value]) => (`${key}=${value}`))
//     .join('&');
//   return `${API_URL}/${method}?${getParams}&unit=M&key=${API_KEY}`;
// }

export const getTodayWeather = city => getRequest(`current?city=${city}`);
export const getWeekForcast = city => getRequest(`forecast/daily?city=${city}`);

export const getForecast = city => Promise.all([getTodayWeather(city), getWeekForcast(city)]);
