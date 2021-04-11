import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import "../../CSS/BrowseArea.css"
import {setWhichDashboardPageToDashboard} from "../../actions"
import {useDispatch} from "react-redux"

const containerStyle = {
    left: '30vw',
  width: '70vw',
  height: '100vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const BrowseArea = ({setWhichDashboardPage}) => {
  const dispatch = useDispatch()
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

  console.log(map)

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      > <div className="searchSideBar">
          <div className="returnButton"><i  onClick={()=>{dispatch(setWhichDashboardPageToDashboard())}} className="fas fa-3x fa-arrow-circle-left"></i></div>
          <form>
              <input className="searchInput" type="input" placeholder="Search apartment/city"></input>
          </form>

          <p className="clickInformational"><i className="fas fa-info-circle"></i>Click on an area or an apartment to ask questions to residents</p>
        </div>
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(BrowseArea)