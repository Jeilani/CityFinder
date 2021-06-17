import React, { useState, useRef, useCallback } from 'react'
import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import "../../CSS/BrowseArea.css"
import SearchSidebar from "./BrowseAreaSub/SearchSidebar.js"
import mapStyles from "../../mapStyles"
import { determineWhichIcon, convertLng } from "../../helperfunctions"
import ChosenMarker from "./BrowseAreaSub/ChosenMarker.js"
import LoadingScreen from "./BrowseAreaSub/LoadingScreen.js"
import WarningMessage from "../WarningMessage"

const containerStyle = {
    left: '30vw',
  width: '70vw',
  height: '100vh'
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true
}

const places = ['places']

const BrowseArea = ({setWhichDashboardPage}) => {
  const [whichCategory, setWhichCategory] = useState("All")
  const [mapResults, setMapResults] = useState([])
  const [chosenMarker, setChosenMarker] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [showFailedResults, setShowFailedResults] = useState(false)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries: places,
  });

  const panTo = React.useCallback(({lat, lng})=>{
    mapRef.current.panTo({lat, lng})
    mapRef.current.setZoom(16)
  }, [])

  const mapRef = useRef()
  const [map, setMap] = useState(null)
  const onLoad = useCallback(function callback(map) {
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
      }, (err)=>{alert(err)});
    }, [])

  const onUnmount = useCallback(function callback(map) {
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
    }, err=>{alert(err)})
  }

  const callMarkers = () => {
    let icon = determineWhichIcon(whichCategory)
    if (mapResults){
      return mapResults.map(eachLocation => {
        return (
          <Marker key={eachLocation.place_id}
          position = {{lat: eachLocation.geometry.location.lat(), lng: eachLocation.geometry.location.lng()}}
          onClick={()=>setChosenMarker(eachLocation)}
          icon = {{
            url: icon,
            scaledSize: new window.google.maps.Size(35, 35),
            origin: new window.google.maps.Point(0,0),
            anchor: new window.google.maps.Point(15, 15)
        }}
          />
        )
      })
    }
  }

  const searchCategoriesNearby =  category => {
    setIsLoading(true)
    let c = category.toLowerCase()
    let lat = map.getCenter().lat()
    let lng = convertLng(map.getCenter().lng())
    let location = new window.google.maps.LatLng(lat, lng);
    let request = {
      location: location,
      radius: '1500',
      keyword: c
    }
    const service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status)=>{
      if (status === "OK") {
        setMapResults(results)
        setWhichCategory(category)
        setIsLoading(false)
      }
      else {
        setWhichCategory(category)
        setMapResults([])
        setIsLoading(false)
        setIsLoading(false)
        renderFailedResult()
      }
    });
  }

  const renderFailedResult = () =>{
    setShowFailedResults(true)
    setTimeout(()=>setShowFailedResults(false), 2000)
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        {showFailedResults?<WarningMessage message={`No results for ${whichCategory.toLowerCase()} in this area`}/>:null}
        {isLoading?<LoadingScreen/>:null}
        {chosenMarker?<ChosenMarker map={map} data={chosenMarker} setChosenMarker={setChosenMarker}/>:null}
        <SearchSidebar panTo={panTo} searchCategoriesNearby={searchCategoriesNearby} whichCategory={whichCategory}/>
        <i className="fas locate fa-location-arrow" onClick = {()=>{relocate()}}></i>
        { /* Child components, such as markers, info windows, etc. */ }
        {isLoaded?callMarkers():null}
        <></>
      </GoogleMap>
  ) : <div className="loadingScreen"><i className="fas fa-spinner">{loadError}</i></div>
}

export default React.memo(BrowseArea)