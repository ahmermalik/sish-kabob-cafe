import React from 'react';
import Core from '../core/yelp_api';
import Yelp from '../components/yelp';
import {Link} from 'react-router-dom';
import Background from '../img/background_image.jpeg';

const sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${Background})`
};


export default class Home extends React.Component {
    render() {
        return(
            <div>  <img src={ Background } /><Yelp/> </div>

        )
    }
};