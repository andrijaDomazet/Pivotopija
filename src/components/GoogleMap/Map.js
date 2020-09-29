import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
} from "react-google-maps";

const Markers = ({ places, showOnMap, changeScreen }) => {
  return places.map((place) => {
    const show = () => {
      return place.id === showOnMap
        ? "http://maps.google.com/mapfiles/marker_black.png"
        : "http://maps.google.com/mapfiles/marker_yellow.png";
    };

    return (
      <Marker
        icon={{
          url: show(),
          // "https://mt.google.com/vt/icon/name=icons/spotlight/bar_v_L_8x.png&scale=1",
        }}
        key={place.id}
        position={{ lat: parseFloat(place.lat), lng: parseFloat(place.lng) }}
        onClick={() => {
          changeScreen(place);
        }}
      />
    );
  });
};

//ToDo- change zoom with different objects list
const zoom1 = 12;

//ToDo- change center with fifferent objects list
const center1 = { lat: 44.821726, lng: 20.443851 };

// const showOnMap = this.props.showOnMap;
const Map = ({ places, showOnMap, changeScreen }) => {
  return (
    <GoogleMap defaultZoom={zoom1} defaultCenter={center1}>
      <Markers
        places={places}
        showOnMap={showOnMap}
        changeScreen={changeScreen}
      />
    </GoogleMap>
  );
};

class MapWithMarker extends React.Component {
  state = {
    places: this.props.places,
  }; //initialize initial state from props

  addPlace() {
    const newPlaces = () => {
      return this.props.places.map((place) => {
        return {
          id: place.id,
          lat: place.lat,
          lng: place.lng,
        };
      });
    };
    this.setState((prevState) => ({
      places: newPlaces(),
    }));
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.places !== prevProps.places) {
      this.addPlace();
    }
  };
  render() {
    return (
      <Map
        center={center1}
        zoom={zoom1}
        places={this.state.places}
        showOnMap={this.props.showOnMap}
        changeScreen={this.props.changeScreen}
      />
    );
  }
}

export default withScriptjs(withGoogleMap(MapWithMarker));
