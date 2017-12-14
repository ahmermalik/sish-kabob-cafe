import React from 'react';
import Core from '../core/yelp_api';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../css/App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconMenu from 'material-ui/IconMenu';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

export default class Yelp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {yelp_data: []};

        axios.get('http://localhost:8000/')
            .then((results) => {
                this.setState({yelp_data: results.data.reviews})
            })
    }

    render_yelp () {
        return this.state.yelp_data.map((review) => {
            return (

                <div className="review-text">

                <li>

                    <Card> <h3>"{review.text}"</h3> </Card>

                </li>
                    </div>

            )
        });
    }

    render(){

        console.log(this.state.yelp_data)
        return(

                <div>
                    <div>
                        <h1 className = "review-title"> Restaurant Yelp Reviews </h1> </div>
                    <ul>
                        {this.render_yelp()}
                    </ul>

                </div>

            )
    }
}