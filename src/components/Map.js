import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";


const Map = (props) => {
    
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) return <p>Map is loading...</p>;

  return (
    <GoogleMap 
    zoom={19} 
    center={props.business.position} 
    mapContainerClassName="map">
    <MarkerF position={props.business.position} />
    </GoogleMap>
  )

}

export default Map