/**
 * Created by aaronmcruer on 4/21/17.
 */
import React from 'react';
import axios from 'axios';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export class MainMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navbarButtons: []
        }
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
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">The Gang Gets Indicted</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}