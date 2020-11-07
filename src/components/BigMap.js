import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "../style/Map.css";
import "leaflet/dist/leaflet.css";
import Geolocate from "./GeoLocate";
import TextField from "@material-ui/core/TextField";

function MyComponent(props) {
  const map = useMap();
  map.flyTo([props.newLocation[0], props.newLocation[1]], 17, { duration: 5 });
  return null;
}

class BigMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: [51.5074, 0.1278],
      zoom: 17,
    };
  }

  parentGeolocateFunction = (geo) => {
    var newPosition = [geo.coords.latitude, geo.coords.longitude];
    this.setState({ position: [...newPosition] });

    return newPosition;
  };

  render() {
    return (
      <div className="map">
        <Geolocate parentGeolocateFunction={this.parentGeolocateFunction} />
        <MapContainer
          ref={this.myRef}
          center={this.state.position}
          zoom={this.state.zoom}
          zoomControl={false}
          minZoom={5}
        >
          <MyComponent newLocation={this.state.position} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={this.state.position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        <TextField
          required
          id="standard-required"
          label="Required"
          value={this.state.position}
        />
      </div>
    );
  }
}

export default BigMap;
