/**
 * Created by aaronmcruer on 4/21/17.
 */
import React from 'react';
import axios from 'axios';
import {About} from './About';
import {CharacterDetail} from './CharacterDetail';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
    {
        path: '/',
        exact: true,
        sidebar: MainMenu,
        main: About
    },
    {
        path: '/Charlie',
        sidebar: MainMenu,
        main: CharacterDetail
    }
];

export class MainMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`http://iasip-backend.herokuapp.com/characters/`)
            .then(res => {
                const iasipCharacters = (res.data);
                //console.log(iasipCharacters);
                this.setState({iasipCharacters});
            });
    }

    render() {
        return (
            <Router>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">The Gang Gets Indicted</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <LinkContainer to="/charlie"><NavItem>Charlie</NavItem></LinkContainer>
                        <LinkContainer to="/dennis"><NavItem>Dennis</NavItem></LinkContainer>
                        <LinkContainer to="/frank"><NavItem>Frank</NavItem></LinkContainer>
                        <LinkContainer to="/mac"><NavItem>Mac</NavItem></LinkContainer>
                        <LinkContainer to="/sweetdee"><NavItem>Sweet Dee</NavItem></LinkContainer>
                    </Nav>
                    {routes.map((route, index) => (
                        // You can render a <Route> in as many places
                        // as you want in your app. It will render along
                        // with any other <Route>s that also match the URL.
                        // So, a sidebar or breadcrumbs or anything else
                        // that requires you to render multiple things
                        // in multiple places at the same URL is nothing
                        // more than multiple <Route>s.
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.sidebar}
                        />
                    ))}
                </Navbar>
            </Router>
        );
    }
}