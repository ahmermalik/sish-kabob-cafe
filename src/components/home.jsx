import React from 'react';
import Core from '../core/yelp_api';
import Yelp from '../components/yelp';
import {Link} from 'react-router-dom';


export default class Home extends React.Component {
    render() {
        return(
            <div> <Yelp/> </div>

        )
    }
};