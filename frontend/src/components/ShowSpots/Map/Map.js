import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import myIcon from './pin-48.svg'
import "./Map.css"

const Map = ({spotsArr}) => {

    const [currIcon, setCurrIcon] = useState(myIcon)

    // let markerz =
    //     spotsArr.map((spot, i) => {
    //         let latAndLog = spot.logAndLat.split(':');
    //         return <Marker
    //             key={`map-pin-${i}`}
    //             icon={{
    //                 url: currIcon,
    //                 scale: 0.005
    //             }}
    //             position={{ lat: Number(latAndLog[0]), lng: Number(latAndLog[1]) }} />
    //     })

    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    const center = {
        lat: 37.090,
        lng: -95.712
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDd4ys9jaY-EJnn7Ku9Q46VFSgVpxfPDN0"
    })

    return isLoaded ? (
        <div className='map'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={5}
            >
                {/* {markerz} */}
            {spotsArr.map((spot, i) => {
                let latAndLog = spot.logAndLat.split(':');
                return <Marker 
                key={`map-pin-${i}`} 
                // icon={{
                //     url: currIcon,
                //     scale: 0.005
                // }}
                position={{ lat: Number(latAndLog[0]), lng: Number(latAndLog[1]) }} />
            })}
            </GoogleMap>
        </div>
    ) : <></>
}

export default Map