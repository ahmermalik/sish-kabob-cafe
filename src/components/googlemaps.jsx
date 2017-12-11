import React from 'react';
import Core from '../core/yelp_api';
import { GoogleMap, Marker } from "react-google-maps"
import {Link} from 'react-router-dom';


export default class Directions extends React.Component{
    render(props){
        return(
            <div>
                MyMapComponent = (props) =>
                <GoogleMap
                    defaultZoom={8}
                    defaultCenter={{ lat: -34.397, lng: 150.644 }}
                >
                    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
                </GoogleMap>

            </div>
                <MyMapComponent isMarkerShown />

        )


    }

}
