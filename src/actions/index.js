import axios from 'axios';

const API_KEY = 'b4017110b0fb239fe7fd3601ee7b62d6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//the redux-promise middleware makes our code seems like being syncronous,
//although we are waiting for a promise resolution.
//redux-promise is declared on main index.js root file
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},br`;
  //axios returns a promise, so request will be a promise
  const request = axios.get(url);
  //console.log('Request: ', request);

  //nonethless, redux-promise middleware package will get that promise, wait for it being resolved
  //and deliver the actual data result into the payload
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
