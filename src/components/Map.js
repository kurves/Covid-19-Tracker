import React from 'react'
import {  MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
import './Map.css';
import {showMapData} from '../utilities/utils';

function Map({center,zoom,countries,casesType="cases"}) {
    
    return (
			<div className="map">
				<MapContainer  center={center} zoom={zoom}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{showMapData(countries,casesType)}
				</MapContainer>
			</div>
		);
}

export default Map

