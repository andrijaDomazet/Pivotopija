import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.8104,
      lng: 20.454139,
    },
    zoom: 12,
  };

  render() {
    return (
      <div
        style={{
          flex: "1",
          border: "1px solid white",
          // height: "45vh",
          width: "100%",
          margin: "0 auto",
          border: "1px solid green",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDbAz1XXxDoKSU2nZXec89rcHPxgkvVoiw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
    position: { lat: 44.8104, lng: 20.454139 },
    map,
    title: "",
  });
  return marker;
};
