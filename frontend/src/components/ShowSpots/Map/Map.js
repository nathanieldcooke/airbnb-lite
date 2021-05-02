import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./Map.css"

const Map = () => {

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

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    // let location = {lat: -25.363, lng: 131.044};
    // let map = new google.maps.Map(
    //     <div className='map' id='map'></div>, {
    //         zoom: 4,
    //         center: location
    //     }
    // );
    // let maker = new google.maps.Marker({
    //     position: location,
    //     map: map
    // })
    return isLoaded ? (
        <div className='map'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={4}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {<Marker label='hello' position={{ lat: 36.107090, lng: -115.071990 }} /> }
                {<Marker label='what?1?!' position={{ lat: 31.968599, lng: -99.901810 }} />}

                <></>
            </GoogleMap>
        </div>
    ) : <></>
}

export default Map