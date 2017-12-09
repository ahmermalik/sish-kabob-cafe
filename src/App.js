import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import Directions from './components/googlemaps';
import Food_Menu from './components/menu';
import Yelp from './components/yelp';
import Form from './components/inquiryform';
import Home from './components/home';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconMenu from 'material-ui/IconMenu';


import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const theme = getMuiTheme({
    palette: {
        primary1Color: '#B2EBF2',
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

    menu () {
        return (
            <IconMenu iconButtonElement={<IconButton className='orange'><MenuIcon /></IconButton>}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                <MenuItem><Link className='dropdown_link' to='/menu'>Menu</Link></MenuItem>
                <MenuItem><Link className='dropdown_link' to='/directions'>Directions</Link></MenuItem>
                <MenuItem><Link className='dropdown_link' to='/form'>Catering</Link></MenuItem>
            </IconMenu>
        )
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <BrowserRouter>
                    <div>
                        <AppBar
                            title={<div className="navTitle" src="/home"><Link to="/">Sish Kabob Cafe Katy</Link></div>}
                            iconElementLeft={this.menu()}
                        ></AppBar>
                        <div>
                                <Route exact path="/" component={Home}/>
                                <Route path="/menu" component={Food_Menu}/>
                                <Route path="/form" component={Form}/>
                                <Route path="/directions" component={Directions}/>
                        </div>


        </div>
    </BrowserRouter>

            </MuiThemeProvider>
        );
    }
}

export default App;