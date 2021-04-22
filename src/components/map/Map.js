import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import './map.css'

const LocationPin = ({ text }) => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin__icon" />
        <p className="pin__text">{text}</p>
    </div>
)

const Map = ({ locations }) => {    
const dCenter = {
    address: locations[0].address,
    lat: Number(locations[0].location.latitude),
    lng: Number(locations[0].location.longitude),
}
const handleApiLoaded = (map, maps) => {};

    return <div className="map">
        <h2 className="map__title">Zoom in and enjoy</h2>

        <div className="map__container">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCmSnqHEhM6XqlBNoc28pkl8JhyEiyGFNA' }}
                center={dCenter}
                defaultZoom={9}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}           
            >
            {
                locations.map((loc, index) => (
                        <LocationPin  key={index} lat={Number(loc.location.latitude)} lng={Number(loc.location.longitude)} text={String(loc.name)} />
                ))
            }            
            </GoogleMapReact>
        </div>
    </div>
}

export default Map