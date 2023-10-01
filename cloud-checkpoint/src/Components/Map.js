import React from 'react'
import './Map.css'
import GoogleMapReact from 'google-map-react'

function Map({ location, zoomLevel })  {
   
    return(
    <div className="map" >
      <h2 className="map-h2"> Bienvenue sur notre page de destination</h2>
      <div className="google-map" style={{padding:"50px"}}>
      <GoogleMapReact
       
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
       
      </GoogleMapReact>
      MP
    </div>
      
      </div>
      )
}
export  default Map;