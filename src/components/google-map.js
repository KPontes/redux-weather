import React, {Component} from 'react';

class GoogleMap extends Component {

  //this is a life cycle method that is called after the component has been rendered
  componentDidMount() {
    //google.maps is already available from our index.html page
    //Map takes a DOM object as reference where it will render the embeded map
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    //the ref in react creates a direct reference to an html DOM object after being rendered
    //so, after rendering the page I can access the div as this.refs.map
    return <div ref="map" />
  };
}

export default GoogleMap;
