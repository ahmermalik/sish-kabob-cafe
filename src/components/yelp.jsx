import React from 'react';
import Core from '../core/yelp_api';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Yelp extends React.Component {
    render(){

        var yelpreview =[]

        axios.get('https://api.yelp.com/v3/businesses/{id}/reviews')
            .then((results) => {yelpreview = results.data} )
        return(
        <div> {yelpreview}</div>

            )
    }
}