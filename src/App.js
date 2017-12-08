import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import Directions from './components/googlemaps';
import Menu from './components/menu';
import Yelp from './components/yelp';
import Form from './components/inquiryform';
import Home from './components/home';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const theme = getMuiTheme({
    palette: {
        primary1Color: '#E91E63',
        accent1Color: '#000000',

        textColor: '#000000',
    },
    appBar: {
        height: 30,
        textColor: '#000000',
    },
    IconButton: {
        height: 50,
        background: 'logo.svg',
    },
});

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <AppBar title="Hello"/>
                <Card>
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                </Card>
    <BrowserRouter>
                <div>
                     <ul>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/form">Form</Link></li>
                     </ul>
                    <Route exact path="/" component={Home}/>
                    <Route path="/menu" component={Menu}/>
                    <Route path="/form" component={Form}/>
                    <Route path="/form" component={Directions}/>
                </div>
    </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;