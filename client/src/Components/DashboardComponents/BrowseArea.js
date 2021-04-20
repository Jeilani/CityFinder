import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import "../../CSS/BrowseArea.css"
import SearchSidebar from "./BrowseAreaFolder/SearchSidebar.js"
import mapStyles from "../../mapStyles"

const containerStyle = {
    left: '30vw',
  width: '70vw',
  height: '100vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true
}


const BrowseArea = ({setWhichDashboardPage}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC2L0nnfFlL_0yZ95DZ4S2vL_nj0EKjghE"
  })
  const mapRef = React.useRef()
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    navigator.geolocation.getCurrentPosition(position=>{
      mapRef.current = map;
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      map.panTo(
        {lat: position.coords.latitude,
          lng: position.coords.longitude}
        )
        map.setZoom(14)
        setMap(map)
      }, (err)=>{console.log(err)});
    }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const relocate = () => {
    navigator.geolocation.getCurrentPosition(position=>{
      map.panTo(
        {lat: position.coords.latitude,
          lng: position.coords.longitude}
        )
        map.setZoom(14)
        setMap(map)
    }, err=>{console.log("error in locater button" + err)})
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        <SearchSidebar/>
        <i className="fas locate fa-location-arrow" onClick = {()=>{relocate()}}></i>
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(BrowseArea)