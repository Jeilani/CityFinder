import React from "react"

import "../../../CSS/Search.css"

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox"

import "@reach/combobox/styles.css"

function Search({panTo}){
    const {ready, value, suggestions:{status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
      requestOptions: {
        location: {lat: () => 39.7392, lng: () => 104.9903 },
        radius: 200 * 1000
      }
    })

    return (
        <div className="search">

            <Combobox
            className="ComboboxContainer"
             onSelect = {async(address) => {
                setValue(address, false)
                clearSuggestions()
                try {
                    const results = await getGeocode( { address } )
                    console.log("results after select is ", results)
                    const latlng = await getLatLng(results[0])
                    const {lat, lng} = latlng
                    panTo({lat, lng})
                } catch (error) {
                    console.log("error")
                }

            }}>
                <ComboboxInput
                value={value}
                onChange={e=>{
                setValue(e.target.value)
                }}
                disabled={!ready}
                placeholder={"Search a city/area"}
                />
                <ComboboxPopover>
                    <ComboboxList classNamme="comboboxlist">
                    {status === "OK" && data.map(({id, description})=>{
                        return <ComboboxOption key={id} value={description}/>
                    })}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
  }
  export default Search
