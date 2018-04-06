import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    //sparklines maps expect to receive just array of numbers
    //so, need to extract just the temperatures, pressure and humidity from the object
    const temperatures = cityData.list.map((weather) => weather.main.temp);
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const humidities = cityData.list.map((weather) => weather.main.humidity);
    const {lon, lat} = cityData.city.coord; //ES6 destructuring

    return (
      <tr key={name}>
        <td> <GoogleMap lon={lon} lat={lat} /> </td>
        <td> <Chart data={temperatures} color="orange" units="K" />  </td>
        <td> <Chart data={pressures} color="green" units="hPa" />  </td>
        <td> <Chart data={humidities} color="black" units="%" />  </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  };
}

function mapStateToProps(state) {
  return {weather: state.weather} //state.weather defined in /reducer/index
}


export default connect(mapStateToProps)(WeatherList);
