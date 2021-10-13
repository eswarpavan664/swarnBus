/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */

import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL,{Marker} from "react-map-gl";// eslint-disable-line import/no-webpack-loader-syntax
 
import firebaseDB from '../firebase';
export default function  MapComponent() {
    
    const [getData,setGetData] = useState({});
  
    useEffect(()=>{
            firebaseDB.child('BusLocations').on('value',details=>{
                console.log(details.val());
                setGetData(details.val());
            })

    },[getData])


    const [mapViewport,setMapViewport] = useState({
        height: "100vh",
        width: "100wh",
        longitude: 81.696617,
        latitude: 16.432983,
        zoom: 5
      });
    
      return (
        <ReactMapGL
          {...mapViewport}
          mapboxApiAccessToken="pk.eyJ1IjoicGF2YW5lc3dhciIsImEiOiJja3RvbGJrZG4wZHNsMnVtdXo2dnczMTlsIn0.YCdQ-ukTTHqEkUc5RlZ1Dg"
          mapStyle="mapbox://styles/ernebuta/ck6l5q6me1dmn1ip74713pndm"
          onViewportChange={setMapViewport}

        >
            {getData &&
              Object.keys(getData).map(key=>

                <Marker
          offsetTop={-48}
          offsetLeft={-24}
          latitude={getData[key].Latitude}
          longitude={getData[key].Longitude}
       >
         <img src=" https://img.icons8.com/color/48/000000/marker.png" />
        </Marker>
             )
              }
         
        </ReactMapGL>
      );
}