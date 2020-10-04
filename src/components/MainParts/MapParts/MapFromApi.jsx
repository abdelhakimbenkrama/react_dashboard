import React from "react";
import styled from "styled-components";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return <GoogleMap defaultZoom={3} defaultCenter={{ lat: 12, lng: 12 }} />;
}

const WrrappedMap = withScriptjs(withGoogleMap(Map));

const MapFromApi = () => {
  return (
    <Container>
      <WrrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        }
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
`;
export default MapFromApi;
