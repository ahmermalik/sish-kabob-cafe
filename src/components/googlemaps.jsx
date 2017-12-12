import React from 'react';
import Core from '../core/yelp_api';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {Link} from 'react-router-dom';


var MyMapComponent = withScriptjs(withGoogleMap(function (props) {
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: 29.783204, lng: -95.71791}}
        >
            {props.isMarkerShown && <Marker position={{lat: 29.783204, lng: -95.71791}}/>}
        </GoogleMap>
    )
}))

class MyMapComponent2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{lat: 29.783204, lng: -95.71791}}
            >
                {this.props.isMarkerShown && <Marker position={{lat: 29.783204, lng: -95.71791}}/>}
            </GoogleMap>
        )
    }
}

var Wrapped = withScriptjs(withGoogleMap(MyMapComponent2))

export default class Directions extends React.Component{
    render(props){
        return(
            <div>
                <MyMapComponent2 isMarkerShown={true}
                                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}/>
            <div> Address: 19965 Katy Fwy, Houston, TX 77094</div>
            </div>

        )


    }

}
